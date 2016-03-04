import {CardBase} from "../card-base";

export class TextCard extends CardBase {
    public static type = "TextCard";

    get type() {
        return TextCard.type;
    }

    constructor(public id:number,
                public text:string) {
        super(id);
    }

    clone() {
        return new TextCard(this.id, this.text);
    }
}
