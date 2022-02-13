function myBind(func, context) {
    return function () {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol]();
        delete context[symbol];
        return result;
    };
}

function f() {
    return this.a + 1;
}

let obj = {
    a: 10,
};

let f2 = myBind(f, obj);
console.dir(f2());

console.log(Symbol() === Symbol())

function f() {
    let symbol = Symbol();
    let symbol2 = Symbol();
    return {
        [symbol]: 2,
        [symbol2]: 22,
        a: 6,
    };
}

let obj = f();
let symbols = Object.getOwnPropertySymbols(obj);

console.log(obj[symbols[0]]);