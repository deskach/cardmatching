export class ICard {
    public id:number;

    get isFolded():boolean {
        throw "implement me";
    }

    set isFolded(aIsFolded:boolean) {
        throw "Implement me";
    }

    clone():ICard {
        throw "Implement me";
    }
}
