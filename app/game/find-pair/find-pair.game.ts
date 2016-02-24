import {Card} from "../../card/card";
import {Injectable} from "angular2/core";
import {IGame} from "../igame";

//TODO: implement me
@Injectable()
export class FindPairGame implements IGame {
    select(card:Card) {
        card.isFolded = !card.isFolded;
    }
}
