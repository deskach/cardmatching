import {Injectable} from 'angular2/core';
import {ICardService} from "../icard.service";
import {TextCard} from "./text.card";

@Injectable()
export class TextCardService implements ICardService {
    private _CARDS = [
        new TextCard(1, 'A'),
        new TextCard(2, 'B'),
        new TextCard(3, 'C'),
        new TextCard(4, 'D'),
        new TextCard(5, 'E'),
        new TextCard(6, 'F'),
        new TextCard(7, 'G'),
        new TextCard(8, 'H'),
        new TextCard(9, 'I')
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
