export interface IPubSubCallback<T> {
    (value:T): any;
}

export interface IPubSub<T> {
    subscribe(callback: IPubSubCallback<T>);
    unsubscribe();
    emit(value: T);
}
