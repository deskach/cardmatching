import {Component, OnInit, EventEmitter, Output}   from 'angular2/core';
import {NgSwitch, NgSwitchWhen} from "angular2/common";
import {ICard} from "../card/icard";
import {IGame} from "../game/igame";
import {Title} from "angular2/src/platform/browser/title";
import {TextCardComponent} from "../card/text/text.card.component";
import {ImgCardComponent} from "../card/img/img.card.component";
import {GameFactory} from "../game/game-factory";

@Component({
    styleUrls: ['app/cards-list/card-list.css'],
    templateUrl: 'app/cards-list/card-list.html',
    directives: [ImgCardComponent, TextCardComponent, NgSwitch, NgSwitchWhen]
})
export class CardListComponent implements OnInit {
    private _game:IGame = null;
    public cards:ICard[];
    @Output() public onGameOver: EventEmitter<void> = new EventEmitter<void>(false);

    constructor(private _gameFactory: GameFactory, private _title:Title) {
        this._game = this._gameFactory.getInstance();
    }

    ngOnInit() {
        this._game.init().then(() => {
            this.cards = this._game.cards;
            this._title.setTitle(this._game.title);
            this._game.onGameOver.subscribe(()=>this.onGameOver.emit(null));
        });
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }

    reload() {
        this._game = this._gameFactory.createInstance();
        this.ngOnInit();
    }
}
