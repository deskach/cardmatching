import {Component, OnInit}   from 'angular2/core';
import {ICard} from "../card/icard";
import {CardComponent} from "../card/card.component";
import {IGame} from "../game/igame";
import {Title} from "angular2/src/platform/browser/title";

@Component({
    template: `
    <h2>Cards:</h2>
    <div class="cm-card-list">
      <div *ngFor="#card of cards"
        (click)="onSelect(card)">
        <cm-card [card]="card"></cm-card>
      </div>
    </div>
  `,
    directives: [CardComponent]
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
