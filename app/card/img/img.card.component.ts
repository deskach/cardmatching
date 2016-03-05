import {Component} from 'angular2/core';
import {ImgCard} from "./img.card";

@Component({
    selector: "crm-img-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `
    <div *ngIf="card.isFolded" >
        <div class="crm-card thumbnail"></div>
    </div>
    <div *ngIf="!card.isFolded" >
        <img class="crm-card thumbnail" src="{{card.url}}" />
    </div>
    `
})
export class ImgCardComponent {
    public card:ImgCard;
}
