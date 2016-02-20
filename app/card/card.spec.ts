import {CardService} from "./card.service";
import {Card} from "./card";

describe('Card list spec', () => {
    //TODO: finish implementation
    it('should have id', () => {
        let card = new Card(5);

        expect(card.id).toEqual(5);
    });
});
