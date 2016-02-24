import {Component, OnInit}   from 'angular2/core';
import {Card} from "../card/card";
import {CardComponent} from "../card/card.component";
import {IGame} from "../game/igame";

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
    cards:Card[];

    constructor(private _game:IGame) {
    }

    ngOnInit() {
        this._game.init().then(() => {
            this.cards = this._game.cards;
        });
    }

    onSelect(card:Card) {
        this._game.select(card);
    }
}
