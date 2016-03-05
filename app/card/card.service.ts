import {Injectable} from 'angular2/core';
import {ICardService} from "./icard.service";
import {ICard} from "./icard";

@Injectable()
export class CardServiceBase implements ICardService {
    protected _CARDS = [];

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
