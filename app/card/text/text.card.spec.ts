///<reference path="../../../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts"/>
import {TextCard} from "./text.card";

describe('Text card spec', () => {
    //TODO: finish implementation
    it('should have id', () => {
        let card = new TextCard(5, '5');

        expect(card.id).toEqual(5);
    });
});
