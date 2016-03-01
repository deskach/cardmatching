import {ICard} from "../icard";

export class TextCard implements ICard {
    private _isFolded:boolean = true;

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

    constructor(public id:number,
                public text?:string) {
    }

    clone():ICard {
        return new TextCard(this.id);
    }
}
