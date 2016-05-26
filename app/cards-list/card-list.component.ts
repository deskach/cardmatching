import {Component, OnInit, EventEmitter, Output}   from '@angular/core';
import {NgSwitch, NgSwitchWhen} from "@angular/common";
import {ICard} from "../card/icard";
import {IGame} from "../game/igame";
import {Title} from "@angular/platform-browser/src/browser/title";
import {TextCardComponent} from "../card/text/text.card.component";
import {ImgCardComponent} from "../card/img/img.card.component";
import {GameFactory} from "../game/game-factory";

@Component({
    styleUrls: ['app/cards-list/card-list.css'],
    templateUrl: 'app/cards-list/card-list.html',
    directives: [ImgCardComponent, TextCardComponent, NgSwitch, NgSwitchWhen]
})
export class CardListComponent implements OnInit {
    private _isGameOver:boolean;
    private _title = new Title();

    private _game:IGame = null;
    public cards:ICard[];
    @Output() public onGameOver: EventEmitter<void> = new EventEmitter<void>(false);

    constructor(private _gameFactory: GameFactory) {
        this._game = this._gameFactory.getInstance();
    }

    get isGameOver() {
        return this._isGameOver;
    }

    set isGameOver(isGameOver: boolean) {
        this._isGameOver = isGameOver;

        if(isGameOver) {
            this.onGameOver.emit(null);
        }
    }

    ngOnInit() {
        this._game.init().then(() => {
            this.cards = this._game.cards;
            this.isGameOver = this._game.cards.filter(c => c.isPlayable).length === 0;
            //this._title.setTitle(this._game.title);
            this._game.onGameOver.subscribe(() => {
                this.isGameOver = true;
                this._game.onGameOver.unsubscribe();
            });
        });
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }

    newGame() {
        this._game = this._gameFactory.createInstance();
        this.ngOnInit();
    }
}
