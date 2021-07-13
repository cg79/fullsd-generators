

class CustomObserver {
    constructor() {

        this.overridePush();

        this.defineWatch();
    }

    defineWatch() {
        if (Object.prototype['watch']) {
            return;
        }

        Object.defineProperty(
            Object.prototype,
            "watch", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function (prop, handler) {
                var old = this[prop];
                var cur = old;
                var getter = function () {
                    return cur;
                };
                var setter = function (val) {
                    old = cur;
                    cur =
                        handler.call(this, prop, old, val);
                    return cur;
                };

                // can't watch constants
                if (delete this[prop]) {
                    Object.defineProperty(this, prop, {
                        get: getter,
                        set: setter,
                        enumerable: true,
                        configurable: true
                    });
                }
            }
        });
    }
    overridePush() {
        if(Array.prototype['overrides']) {
            return;
        }
        Array.prototype['overrides'] = 1;
        var opush = Array.prototype.push;
        Array.prototype['push'] = function () {
            // debugger;
            console.log(this);
            return opush.apply(this, arguments);
        }
    }

    observe(obj, props = [], onAfterChanged) {
        props.forEach(propName => {
            obj.watch(propName, (v) => {
                console.log(v);
                onAfterChanged(v)
                debugger;
            });
        });
    }
}
export default new CustomObserver();