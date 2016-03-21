import {Component} from 'angular2/core';
import {TextCard} from "./text.card";

@Component({
    selector: "crm-text-card",
    styleUrls: ['app/card/card.css', 'app/card/text/text.card.css'],
    inputs: ['card'],
    template: `
    <div *ngIf="card.isFolded" >
        <div class="crm-card"></div>
    </div>
    <div *ngIf="!card.isFolded" >
        <div class="crm-card" [class.crm-card-not-playable]="!card.isPlayable" >
            <div class="crm-text-card">
                {{card.text}}
            </div>
        </div>
    </div>
    `
})
export class TextCardComponent {
    public card: TextCard;
}
