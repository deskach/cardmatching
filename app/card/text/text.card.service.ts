import {Injectable} from 'angular2/core';
import {ICardService} from "../icard.service";
import {TextCard} from "./text.card";

@Injectable()
export class TextCardService implements ICardService {
    getCards() {
        var CARDS = [
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

        var cardsPromise = Promise.resolve(CARDS);

        return cardsPromise;
    }
}
