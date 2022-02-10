function myBind(func, context) {
    return function() {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol]();
        delete context[symbol];
        return result;
    };
}