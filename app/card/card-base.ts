import {CRMConstants} from '../static';
import {ICard} from "./icard";

export class CardBase implements ICard {
    public static type = "BaseCard";

    public isPlayable:boolean = true;

    private _isFolded:boolean = true;

    get type():string {
        return CardBase.type;
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
