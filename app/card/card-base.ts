import {CRMConstants} from '../static';
import {ICard} from "./icard";

export class CardBase implements ICard {
    private _isFolded:boolean = true;

    get type():string {
        throw new Error(CRMConstants.OVERRIDE_ME);
    }

    get isFolded():boolean {
        return this._isFolded;
    }

    set isFolded(aIsFolded:boolean) {
        if (aIsFolded) { // delay card folding, to give some time to a user to see its face
            setTimeout(() => {
                this._isFolded = true;
            }, 1000);
        } else {
            this._isFolded = false;
        }
    }

    constructor(public id:number) {
    }

    clone():ICard {
        throw new Error(CRMConstants.OVERRIDE_ME);
    }
}
