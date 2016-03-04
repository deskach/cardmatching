import {CardBase} from "../card-base";

export class ImgCard extends CardBase {
    public static type = "ImgCard";

    get type() {
        return ImgCard.type;
    }

    constructor(public id:number,
                public url:string) {
        super(id);
    }

    clone() {
        return new ImgCard(this.id, this.url);
    }
}
