import {Component} from '@angular/core';
import {ImgCard} from "./img.card";

@Component({
    selector: "crm-img-card",
    styleUrls: ['app/card/card.css'],
    inputs: ['card'],
    template: `
    <div class="crm-card"
     [ngClass]="{
        'crm-card-bw': card.isPlayable,
        'crm-card-not-playable': !card.isPlayable
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
