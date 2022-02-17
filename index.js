// Рекурсия

function min(arr, index) {
    index = index || 0;

    let result = arr[index]; // 2
    let value = null;

    if (arr.length > index) {
        value = min(arr, index + 1); // 1
    }

    if (value !== null && result > value) { // 2 > 3
        return value;
    }

    return result;
}

min([1, 2, 3, 4])


function f(arr, index) {
    index = index || 0;

    if (arr.length <= index) {
        return 0;
    }

    return arr[index] + f(arr, ++index);
}

console.dir(f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function f(arr, index) {
    index = index || 0;

    if (arr.length > index) {
        f(arr, index + 1);
        console.log(arr[index]);
    }
}

f([1, 2]);


const factorialRecursionMemo = (function () {
    let memo = {};
    return function factorial(number) {
        if (number === 0) {
            return 1;
        }

        if (memo[number] === undefined) {
            memo[number] = factorial(number - 1);
        }

        return number * memo[number];
    };
})();

factorialRecursionMemo(5)




// Генераторы и итераторы


function* f(max, index) {
    index = index || 0;

    if (index++ < max) {
        yield* f(max, index);
    }

    yield index;
}

for (let item of f(5)) {
    console.log(item);
}


let obj = {
    min: 0,
    max: 10,
    [Symbol.iterator]: function* () {
        for (let i = this.min; i < this.max; i++) {
            yield i * 2;
        }
    },
};


/*
let result = obj.customMap(word => {
    return {
        word,
        lehgth: word.length,
    };
});
console.log(result);*/


function* f() {
    for (let i = 0; i < 3; i++) {
        yield* f2();
    }

    return 7;
}

function* f2() {
    for (let i = 0; i < 3; i++) {
        yield i * 2;
    }
}

for (let item of f()) {
    console.log(item);
}


let obj = {
    min: 0,
    max: 10,
    [Symbol.iterator]() {
        return {
            current: this.min,
            max: this.max,
            next() {
                if (this.current < this.max) {
                    return {
                        value: this.current++,
                        done: false,
                    };
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    },
};

Object.prototype.customMap = function (callback) {
    if (this[Symbol.iterator] === undefined) {
        throw new Error("Object isn't iterable");
    }

    let result = [];

    let iterator = this[Symbol.iterator]();
    let next = iterator.next();
    for (; !next.done;) {
        result.push(callback(next.value));
        next = iterator.next();
    }

    return result;
};
let obj2 = {};
let result = [4, 5, 6].customMap(value => value * 2);
console.dir(result);
/*
for(let item of obj) {
    console.log(item);
}*/


let obj = {
    str: "asd dfuhg ier sdfguhdf js bgdsjfhdgf hf fh",
    [Symbol.iterator]() {
        return {
            index: 0,
            str: this.str.split(" "),
            next() {
                if (this.index < this.str.length) {
                    return {
                        value: this.str[this.index++],
                        done: false,
                    };
                }

                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    },
};



let result = obj.customMap(word => {
    return {
        word,
        lehgth: word.length,
    };
});
console.log(result);


function* f() {
    for (let i = 0; i < 3; i++) {
        yield* f2();
    }

    return 7;
}

function* f2() {
    for (let i = 0; i < 3; i++) {
        yield i * 2;
    }
}

for (let item of f()) {
    console.log(item);
}


// Кастомный bind

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

console.log(Symbol() === Symbol());


function myBind(func, context) {
    let self = Object.create(context);
    return function () {
        self.func = func;
        return self.func();
    };
}

// Образец

function getSumAllNumber(array, index) { 
    index = index || 0; 
    let sum = array[index]; 
    if (++index < array.length) { 
        sum += getSumAllNumber(array, index); 
    } 
    return sum;
}
getSumAllNumber([1, 2, 3, 4])


function getSumOddNumber(arrayOfNumbers, index) { 
    index = index || 0; 
    let sum = 0; 
    if (arrayOfNumbers[index] % 2 !== 0) { 
        sum += arrayOfNumbers[index]; 
    } 
    if (++index < arrayOfNumbers.length) {
        sum += getSumOddNumber(arrayOfNumbers, index); 
    }
    return sum;
}

getSumOddNumber([1, 2, 3, 4])

// customBind

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

// Сортировка

Array.prototype.findMinIndex = function () {
  let minIndex = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] < this[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

Array.prototype.selectionSort = function () {
  let result = [];
  while (this.length > 0) {
    let minIndex = this.findMinIndex();
    result.push(this[minIndex]);
    this.splice(minIndex, 1);
  }
  return result;
}

[10, -100, 20, -9, 15, -900, 34, 6, 48, 555].selectionSort()


Array.prototype.quickSort = function () {
  if (this.length <= 1) {
    return this;
  }
  let index = Math.floor(this.length / 2);
  let controlElement = this[index];
  let left = [];
  let right = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === controlElement) {
      continue;
    }
    if (this[i] < controlElement) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }
  return left.quickSort().concat(controlElement, right.quickSort());
}

[10, -100, 20, -9, 15, -900, 34, 6, 48, 555].quickSort()