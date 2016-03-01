import {Injectable} from 'angular2/core';
import {ICardService} from "../icard.service";
import {TextCard} from "./text.card";

@Injectable()
export class TextCardService implements ICardService {
    private _CARDS = [
        new TextCard(1),
        new TextCard(2),
        new TextCard(3),
        new TextCard(4),
        new TextCard(5),
        new TextCard(6),
        new TextCard(7),
        new TextCard(8),
        new TextCard(9)
    ];

    getCards() {
        return Promise.resolve(this._CARDS);
    }

    getCard(id:number) {
        let allCards = this._CARDS.filter(c => c.id === id);
        let card = null;

        if (allCards.length > 0) {
            card = allCards[0];
        }

        return Promise.resolve(card);
    }
}
