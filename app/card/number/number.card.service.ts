import {Injectable} from 'angular2/core';
import {ICardService} from "../icard.service";
import {Card} from "../card";

@Injectable()
export class NumberCardService implements ICardService {
    getCards() {
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

        return cardsPromise;
    }
}
