import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";
import {Subscription} from 'rxjs/Subscription';
import {IPubSub, IPubSubCallback, IPubSubMessage} from "./ipubsub";

export class PubSub implements IPubSub {
    private _subject = new Subject();
    private _state = <Observable<IPubSubMessage>> this._subject;
    private _subscription = new Subscription();

    subscribe(callback:IPubSubCallback) {
        this._subscription.add(this._state.subscribe((v) => {
            callback(v);
        }));
    }

    unsubscribe() {
        this._subscription.unsubscribe();
    }

    emit(value:IPubSubMessage) {
        this._subject.next(value);
    }
}
