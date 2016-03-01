import {ICard} from "./icard";
import {CRMConstants} from '../static';

export class ICardService {
    getCards():Promise<ICard[]> {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }
}
