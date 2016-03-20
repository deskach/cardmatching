import {ICard} from "../../card/icard";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";
import {shuffle} from "../../util";
import {ICardService} from "../../card/icard.service";
import {GameSettings} from "../../settings/settings";

@Injectable()
export class FindPairGame implements IGame {
    cards:ICard[] = [];
    title:string = "Find a pair";

    private selectedCard:ICard = null;

    constructor(private _service1:ICardService,
                private _service2:ICardService,
                private _isNight:boolean) {
    }

    init() {
        if(this.cards.length === 0) {
            return this.reload();
        }

        return Promise.resolve();
    }

    reload() {
        let result = Promise.all([this._service1.getCards(), this._service2.getCards()]);

        result.then((values) => {
            if (values.length === 2) {
                let cards1 = values[0];
                let cards2 = values[1];
                let cards = [];

                cards1.forEach((c1) => {
                    let search = cards2.filter(c => c.id === c1.id);

                    if (search.length > 0) {
                        let card1 = c1.clone();
                        let card2 = search[0].clone();

                        card1.isFolded = this._isNight;
                        card2.isFolded = this._isNight;

                        cards.push(card1);
                        cards.push(card2);
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
        if (card.isPlayable) {
            card.isPlayable = false;
            if(this._isNight) {
                card.isFolded = false;
            }

            if (this.selectedCard) {
                if (this.selectedCard.id !== card.id) {
                    card.isPlayable = this.selectedCard.isPlayable = true;
                    if (this._isNight) {
                        this.selectedCard.isFolded = card.isFolded = true;
                    }
                }

                this.selectedCard = null;
            } else {
                this.selectedCard = card;
            }
        }
    }

    static create(s1:ICardService, s2:ICardService, isNight:boolean) {
        return new FindPairGame(s1, s2, isNight);
    }
}
