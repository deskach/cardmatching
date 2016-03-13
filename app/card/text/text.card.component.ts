import {Component} from 'angular2/core';
import {TextCard} from "./text.card";

@Component({
    selector: "crm-text-card",
    styleUrls: ['app/card/card.css', 'app/card/text/text.card.css'],
    inputs: ['card'],
    template: `
    <div class="crm-card thumbnail">
        <div *ngIf="!card.isFolded" >
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
