import {Card} from "../card/card";

export class IGame {
    cards:Card[];

    init() {
        return new Promise(()=> {
        });
    }

    select(card:Card) {
    }
}