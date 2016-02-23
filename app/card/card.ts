export class Card {
    public isFolded: boolean = true;

    constructor(public id:number) {
    }

    clone() {
        return new Card(this.id);
    }
}
