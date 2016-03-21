import {Component} from 'angular2/core';
import {ImgCard} from "./img.card";

@Component({
    selector: "crm-img-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `
    <div *ngIf="card.isFolded" >
        <div class="crm-card"></div>
    </div>
    <div *ngIf="!card.isFolded" >
        <div class="crm-card" [class.crm-card-not-playable]="!card.isPlayable" >
            <img class="img-responsive" src="{{card.url}}" />
        </div>
    </div>
    `
})
export class ImgCardComponent {
    public card:ImgCard;
}

//class="crm-card thumbnail"