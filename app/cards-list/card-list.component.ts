import {Component, OnInit}   from 'angular2/core';
import {Card} from "../card/card";
import {CardService} from "../card/card.service";
import {CardComponent} from "../card/card.component";
import {shuffle} from "../util";
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
    providers: [CardService],
    directives: [CardComponent]
})
export class CardListComponent implements OnInit {
    cards:Card[];

    constructor(
        private _service:CardService,
        private _game: IGame
    ) {
    }

    ngOnInit() {
        this._service.getCards()
            .then((result) => {
                let cards = [].concat(result);

                for(let i in result) {
                    cards.push(result[i].clone());
                }

                this.cards = shuffle(cards);
            })
    }

    onSelect(card:Card) {
        this._game.select(card);
    }
}
