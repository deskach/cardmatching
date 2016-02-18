import {Component, OnInit}   from 'angular2/core';
import {Card} from "../card/card";
import {CardService} from "../card/card.service";

@Component({
    template: `
    <h2>Cards:</h2>
    <ul>
      <!--<li *ngFor="#hero of heroes"-->
        <!--[class.selected]="isSelected(hero)"-->
        <!--(click)="onSelect(hero)">-->
        <!--<span class="badge">{{hero.id}}</span> {{hero.name}}-->
      <!--</li>-->
    </ul>
  `
})
export class CardListComponent implements OnInit {
    cards:Card[];
    private _selectedId:number;

    constructor(private _service:CardService) {
    }

    isSelected(card:Card) {
        return card.id === this._selectedId;
    }

    ngOnInit() {
        this._service.getCards()
            .then(result => this.cards = result)
    }

    onSelect(card:Card) {
        console.log("Selected: " + card.id);
    }
}
