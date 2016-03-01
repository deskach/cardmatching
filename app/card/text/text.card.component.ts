import {Component} from 'angular2/core';
import {ICard} from "./../icard";

@Component({
    selector: "crm-text-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `<div class="crm-card">{{card.isFolded ? '#' : card.id}}</div>`
})
export class TextCardComponent {
    public card: ICard;
}
