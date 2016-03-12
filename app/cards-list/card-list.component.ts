import {Component, OnInit}   from 'angular2/core';
import {NgSwitch, NgSwitchWhen} from "angular2/common";
import {ICard} from "../card/icard";
import {IGame} from "../game/igame";
import {Title} from "angular2/src/platform/browser/title";
import {TextCardComponent} from "../card/text/text.card.component";
import {ImgCardComponent} from "../card/img/img.card.component";
import {GameSettings} from "../settings/settings";
import {AppComponent} from "../app.component";

@Component({
    styleUrls: ['app/cards-list/card-list.css'],
    templateUrl: 'app/cards-list/card-list.html',
    directives: [ImgCardComponent, TextCardComponent, NgSwitch, NgSwitchWhen]
})
export class CardListComponent implements OnInit {
    cards:ICard[];

    constructor(private _game:IGame, private _sts: GameSettings) {
    }

    ngOnInit() {
        if(this._sts.updated) {
            let factory = AppComponent.getGameFactory();
            let deps = AppComponent.getGameServices();

            this._game = factory(new deps[0](), new deps[1]());
            this._sts.updated = false;
        }

        if(this._game.cards.length === 0) {
            this._game.init().then(() => {
                this.cards = this._game.cards;
            });
        } else {
            this.cards = this._game.cards;
        }

        let title = new Title();
        title.setTitle(this._game.title);
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }
}
