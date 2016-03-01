import {CRMConstants} from '../static';

export class ICard {
    public id:number;

    get type(): string {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }

    get isFolded():boolean {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }

    set isFolded(aIsFolded:boolean) {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }

    clone():ICard {
        throw new Error(CRMConstants.NOT_IMPLEMENTED);
    }
}
