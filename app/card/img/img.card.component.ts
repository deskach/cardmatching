import {Component} from 'angular2/core';
import {ImgCard} from "./img.card";

@Component({
    selector: "crm-img-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `
    <div class="crm-card"
     [ngClass]="{
        'crm-card-bw': card.isPlayable && !card.isFolded
    }">
        <div *ngIf="!card.isFolded">
            <img class="img-responsive" src="{{card.url}}" />
        </div>
    </div>
    `
})
export class ImgCardComponent {
    public card:ImgCard;
}

//class="crm-card thumbnail"