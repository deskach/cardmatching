import {Card} from "../../card/card";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";
import {CardService} from "../../card/card.service";
import {shuffle} from "../../util";

//TODO: implement me
@Injectable()
export class FindPairGame implements IGame {
    cards:Card[] = [];

    constructor(private _service:CardService) {
    }

    init() {
        var result = this._service.getCards();

        result.then((cardArray) => {
                let cards = [].concat(cardArray);

                for (let i in cardArray) {
                    cards.push(cardArray[i].clone());
                }

                this.cards = shuffle(cards);
            });

        return result;
    }

    select(card:Card) {
        card.isFolded = !card.isFolded;
    }
}
