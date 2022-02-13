Function.prototype.customCall = function (context, arguments) {
    if (typeof context !== 'object') {
        context = {};
    }
    const func = this;
    let symbol = Symbol();
    context[symbol] = func;
    let result = context[symbol](arguments);
    delete context[symbol];
    return result;
}

Function.prototype.customBind = function (context, ...rest) {
    if (typeof context !== 'object') {
        context = {};
    }
    const func = this;
    return function (...arguments) {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol](...rest.concat(arguments));
        delete context[symbol];
        return result;
    }
}