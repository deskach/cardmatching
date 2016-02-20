import {Component} from 'angular2/core';
import {Card} from "./card";

@Component({
    selector: "cm-card",
    inputs: ['card'],
    template: `
    <div class="cm-card" [hidden]="card.isFolded">{{card.id}}</div>
    <div class="cm-card" [hidden]="!card.isFolded">#</div>
    `
})
export class CardComponent {
    public card: Card;
}
