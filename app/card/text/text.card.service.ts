import {Injectable} from 'angular2/core';
import {TextCard} from "./text.card";
import {CardServiceBase} from "../card.service";

@Injectable()
export class TextCardService extends CardServiceBase {
    constructor() {
        super();

        this._CARDS = [
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
    }
}
