import {Card} from "../card/card";

export class IGame {
    cards:Card[];

    init():Promise<Card[]> {
        throw "Implement the interface";
    }

    select(card:Card):void {
    }
}