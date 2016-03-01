import {Component, OnInit}   from 'angular2/core';
import {ICard} from "../card/icard";
import {IGame} from "../game/igame";
import {Title} from "angular2/src/platform/browser/title";
import {TextCardComponent} from "../card/text/text.card.component";

@Component({
    styleUrls: ['app/cards-list/card-list.css'],
    template: `
    <h2>Cards:</h2>
    <div class="crm-card-list">
      <div *ngFor="#card of cards"
        (click)="onSelect(card)">
        <crm-text-card [card]="card"></crm-text-card>
      </div>
    </div>
  `,
    directives: [TextCardComponent]
})
export class CardListComponent implements OnInit {
    cards:ICard[];

    constructor(private _game:IGame) {
    }

    ngOnInit() {
        this._game.init().then(() => {
            this.cards = this._game.cards;

            let title = new Title();
            title.setTitle(this._game.title);
        });
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }
}
