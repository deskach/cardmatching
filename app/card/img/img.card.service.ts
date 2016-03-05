import {Injectable} from 'angular2/core';
import {ImgCard} from "./img.card";
import {CardServiceBase} from "../card.service";

@Injectable()
export class ImgCardService extends CardServiceBase {
    constructor() {
        super();

        this._CARDS = [
            new ImgCard(1, 'app/media/images/apple.jpg'),
            new ImgCard(2, 'app/media/images/ball.jpg'),
            new ImgCard(3, 'app/media/images/carrot.jpg'),
            new ImgCard(4, 'app/media/images/dog.jpg'),
            new ImgCard(5, 'app/media/images/eagle.jpg'),
            new ImgCard(6, 'app/media/images/flower.jpg'),
            new ImgCard(7, 'app/media/images/goose.jpg'),
            new ImgCard(8, 'app/media/images/home.jpg'),
            new ImgCard(9, 'app/media/images/icecream.jpg')
            //new ImgCard(10, 'app/media/images/jerry.png'),
            //new ImgCard(11, 'app/media/images/kite.jpg')
        ];
    }
}
