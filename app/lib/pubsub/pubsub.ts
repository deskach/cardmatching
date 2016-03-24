import {Subject } from 'rxjs/Subject';
import {EventEmitter} from "angular2/core";
import {IPubSub, IPubSubCallback} from "./ipubsub";

export class PubSub<T> extends EventEmitter<T> implements IPubSub<T> {
}
