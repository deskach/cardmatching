import {ICard} from "./icard";
import {CRMConstants} from '../static';

export interface ICardService {
    getCards():Promise<ICard[]>;
}
