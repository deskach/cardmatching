import {Card} from "../../card/card";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";
import {shuffle} from "../../util";
import {ICardService} from "../../card/icard.service";

//TODO: implement me
@Injectable()
export class FindPairGame implements IGame {
    cards:Card[] = [];
    selectedCard:Card = null;

    constructor(private _service:ICardService) {
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
        if(card.isFolded) {
            card.isFolded = false;

            if(this.selectedCard) {
                if(this.selectedCard.id !== card.id) {
                    this.selectedCard.isFolded = true;
                    card.isFolded = true;
                }

                this.selectedCard = null;
            } else {
                this.selectedCard = card;
            }
        }
    }
}
