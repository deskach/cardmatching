import {TextCard} from "./text.card";

describe('Text card spec', () => {
    //TODO: finish implementation
    it('should have id', () => {
        let card = new TextCard(5);

        expect(card.id).toEqual(5);
    });
});
