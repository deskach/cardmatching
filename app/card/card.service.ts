import {Injectable} from 'angular2/core';
import {Card} from "./card";

@Injectable()
export class CardService {
    getCards() {
        return cardsPromise;
    }

    getCard(id:number | string) {
        return cardsPromise
            .then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}

var CARDS = [
    new Card(11),
    new Card(12),
    new Card(13),
    new Card(14),
    new Card(15),
    new Card(16)
];

var cardsPromise = Promise.resolve(CARDS);
