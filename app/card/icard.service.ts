import {Card} from "./card";

export class ICardService {
    getCards() {
        return new Promise(()=> {
            return [new Card(0)];
        });
    }
}
