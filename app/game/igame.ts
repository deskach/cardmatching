///<reference path="../card/icard.ts"/>
import {ICard} from "../card/icard";

export class IGame {
    cards:ICard[];

    init():Promise<ICard[]> {
        throw "Implement the interface";
    }

    select(card:ICard):void {
    }
}