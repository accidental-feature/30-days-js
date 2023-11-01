class EventEmitter {
    constructor() {
        this.eventListeners = new Map();
    }

    subscribe(eventName, callback) {
        let listeners = this.eventListeners.get(eventName);

        if (!listeners) {
            listeners = [];
            this.eventListeners.set(eventName, listeners);
        }

        listeners.push(callback);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    emit(eventName, args = []) {
        const listeners = this.eventListeners.get(eventName);

        if (!listeners) {
            return [];
        }

        const results = new Array(listeners.length);

        for (let i = 0; i < listeners.length; i++) {
            results[i] = listeners[i](...args);
        }

        return results;
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */