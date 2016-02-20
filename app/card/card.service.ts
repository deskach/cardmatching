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
    new Card(1),
    new Card(2),
    new Card(3),
    new Card(4),
    new Card(5),
    new Card(6),
    new Card(7),
    new Card(8),
    new Card(9)
];

var cardsPromise = Promise.resolve(CARDS);
