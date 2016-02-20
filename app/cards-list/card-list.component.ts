import {Component, OnInit}   from 'angular2/core';
import {Card} from "../card/card";
import {CardService} from "../card/card.service";
import {CardComponent} from "../card/card.component";

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

    constructor(private _service:CardService) {
    }

    ngOnInit() {
        this._service.getCards()
            .then(result => this.cards = result)
    }

    onSelect(card:Card) {
        card.isFolded = !card.isFolded;
    }
}
