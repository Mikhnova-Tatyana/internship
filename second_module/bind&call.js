Function.prototype.customBind = function (context, ...arguments) {

    return function (...arguments) {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol]();
        delete context[symbol];
        return result;
    };
}


function myBind(func, context) {
    
    return function() {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol];
        delete context[symbol];
        return result;
    };
}

Function.prototype.myBind = function (objectContext, ...args) { 
    const func = this; 
    return function (...args) { 
      let id = Symbol("id"); 
      objectContext[id] = func; 
      const result = objectContextid); 
      delete objectContext[id]; 
      return result; 
    }; 
  };

function func () {
    console.warn(`Функция func вызвана в контексте объекта ${this.name}`)
}

let figure = { name: "figure"}

let figureFunc = func.bind ( figure )
figureFunc()

let figure = { name: "figure"}

function func () {
    console.warn(`Функция func вызвана в контексте объекта ${this.name}`)
}


Function.prototype.customBind = function (context, ...arguments) {

    return function (...arguments) {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol]();
        delete context[symbol];
        return result;
    };
}

let figure3 = customBind(figure, )