import {ICard} from "../../card/icard";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";
import {shuffle} from "../../util";
import {ICardService} from "../../card/icard.service";

@Injectable()
export class FindPairGame implements IGame {
    cards:ICard[] = [];
    selectedCard:ICard = null;

    constructor(private _service1:ICardService,
                private _service2:ICardService
    ) {
    }

    init() {
        let result = Promise.all([this._service1.getCards(), this._service2.getCards()]);

        result.then((values) => {
            if(values.length === 2) {
                let cards1 = values[0];
                let cards2 = values[1];
                let cards = [];

                cards1.forEach((c1) => {
                    let search = cards2.filter(c => c.id === c1.id);

                    if (search.length > 0) {
                        cards.push(c1);
                        cards.push(search[0]);
                    } else {
                        console.log("Failed to find a sibling for Card with id " + c1.id);
                    }
                });

                this.cards = shuffle(cards);
            } else {
                console.log("Unexpected behavior");
            }
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
