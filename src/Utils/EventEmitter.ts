export class EventEmitter {
  private static _events = new Map<string, CallableFunction>()

  public static dispatch(event: string, data: object) {
    const callback = this._events.get(event)

    if (!callback) {
      return
    }

    callback(data)
  }

  public static subscribe(event: string, callback: CallableFunction) {
    EventEmitter._events.set(event, callback)
  }

  public static unsubscribe(event: string) {
    EventEmitter._events.delete(event)
  }

}