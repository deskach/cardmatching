import {ICard} from "../icard";

export class TextCard implements ICard {
    public static type = "TextCard";

    private _isFolded:boolean = true;

    get type(): string {
        return TextCard.type;
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

    constructor(public id:number,
                public text?:string) {
    }

    clone():ICard {
        return new TextCard(this.id);
    }
}
