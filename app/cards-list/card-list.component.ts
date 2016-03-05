import {Component, OnInit}   from 'angular2/core';
import {NgSwitch, NgSwitchWhen} from "angular2/common";
import {ICard} from "../card/icard";
import {IGame} from "../game/igame";
import {Title} from "angular2/src/platform/browser/title";
import {TextCardComponent} from "../card/text/text.card.component";

@Component({
    styleUrls: ['app/cards-list/card-list.css'],
    template: `
    <h2>Cards:</h2>
    <div class="crm-card-list container">
      <div *ngFor="#card of cards">
        <div [ngSwitch]="card.type">
            <template ngSwitchWhen="TextCard">
                <crm-text-card [card]="card" (click)="onSelect(card)"></crm-text-card>
            </template>
            <!--<template [ngSwitchWhen]="ImgCard">-->
                <!--<crm-img-card [card]="card" (click)="onSelect(card)"></crm-img-card>-->
            <!--</template>-->
        </div>
      </div>
    </div>
  `,
    directives: [TextCardComponent, NgSwitch, NgSwitchWhen]
})
export class CardListComponent implements OnInit {
    cards:ICard[];

    constructor(private _game:IGame) {
    }

    ngOnInit() {
        if(this._game.cards.length === 0) {
            this._game.init().then(() => {
                this.cards = this._game.cards;
            });
        } else {
            this.cards = this._game.cards;
        }

        let title = new Title();
        title.setTitle(this._game.title);
    }

    onSelect(card:ICard) {
        this._game.select(card);
    }
}
