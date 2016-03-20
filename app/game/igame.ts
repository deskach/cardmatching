import {ICard} from "../card/icard";
import {CRMConstants} from '../static';

export interface IGame {
    cards:ICard[];
    title:string;

    init():Promise<any>;
    reload():Promise<any>;
    select(card:ICard):void;
}