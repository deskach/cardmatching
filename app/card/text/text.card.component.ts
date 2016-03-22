import {Component} from 'angular2/core';
import {TextCard} from "./text.card";

@Component({
    selector: "crm-text-card",
    styleUrls: ['app/card/card.css', 'app/card/text/text.card.css'],
    inputs: ['card'],
    template: `
    <div class="crm-card"
     [ngClass]="{
        'crm-card-bw': card.isPlayable && !card.isFolded
    }">
        <div *ngIf="!card.isFolded" >
            <div [class.crm-card-not-playable]="!card.isPlayable" class="crm-text-card" >
                {{card.text}}
            </div>
        </div>
    </div>
    `
})
export class TextCardComponent {
    public card: TextCard;
}
