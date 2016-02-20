import {Component} from 'angular2/core';
import {Card} from "./card";

@Component({
    selector: "cm-card",
    inputs: ['card'],
    template: `
    <div class="cm-card">
        {{card.id}}
    </div>
    `
})
export class CardComponent {
    public card: Card;
}
