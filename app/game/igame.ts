import {ICard} from "../card/icard";
import {IPubSub} from "../lib/pubsub/ipubsub";

export interface IGame {
    cards:ICard[];
    title:string;
    onGameOver: IPubSub<void>;

    init():Promise<any>;
    reload():Promise<any>;
    select(card:ICard):void;
}