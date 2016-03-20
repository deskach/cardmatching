import {Component, OnInit}   from 'angular2/core';
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
    cards:ICard[];
    private _game:IGame = null;

    constructor(gameFactory: GameFactory, private _title:Title) {
        this._game = gameFactory.getInstance();
    }

    ngOnInit() {
        this._game.init().then(() => {
            this.cards = this._game.cards;
            this._title.setTitle(this._game.title);
        });
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }
}
