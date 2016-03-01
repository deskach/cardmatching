import {Component} from 'angular2/core';
import {ICard} from "./icard";

@Component({
    selector: "cm-card",
    styleUrls: ['app/card/card.component.css'],
    inputs: ['card'],
    template: `<div class="cm-card">{{card.isFolded ? '#' : card.id}}</div>`
})
export class CardComponent {
    public card: ICard;
}
