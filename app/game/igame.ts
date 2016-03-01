import {ICard} from "../card/icard";
import {CRMConstants} from '../static';

export class IGame {
    cards:ICard[];

    init():Promise<any> {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }

    select(card:ICard):void {
    }
}