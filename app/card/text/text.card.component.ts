import {Component} from 'angular2/core';
import {TextCard} from "./text.card";

@Component({
    selector: "crm-text-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `<div class="crm-card thumbnail">{{card.isFolded ? '' : card.text}}</div>`
})
export class TextCardComponent {
    public card: TextCard;
}
