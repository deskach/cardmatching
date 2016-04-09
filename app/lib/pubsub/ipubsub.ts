export interface IPubSubMessage {
    message:string
}

export interface IPubSubCallback {
    (value:IPubSubMessage):void;
}

export interface IPubSub {
    subscribe(callback:IPubSubCallback);
    unsubscribe();
    emit(value:IPubSubMessage);
}
