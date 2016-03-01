import {ICard} from "../../card/icard";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";
import {shuffle} from "../../util";
import {ICardService} from "../../card/icard.service";

@Injectable()
export class FindPairGame implements IGame {
    cards:ICard[] = [];
    selectedCard:ICard = null;

    //TODO: change constructor to receive two services.
    //The services should implement textCard and imgCard;

    constructor(private _service1:ICardService,
                private _service2:ICardService
    ) {
    }

    init() {
        var result = this._service1.getCards();

        result.then((cardArray) => {
                let cards = [].concat(cardArray);

                for (let i in cardArray) {
                    cards.push(cardArray[i].clone());
                }

                this.cards = shuffle(cards);
            });

        return result;
    }

    select(card:ICard) {
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

    static create(s1: ICardService, s2: ICardService) {
        return new FindPairGame(s1, s2);
    }
}
