let iterableFibonacciObject = {
    firstFibonacciNumber: 0,
    secondFibonacciNumber: 1,
    set setLimit(limit) {
        this.setLimit = limit;
    },
    [Symbol.iterator]: function* () {
        let current = this.firstFibonacciNumber;
        let next = this.secondFibonacciNumber;
        let limit = this.limit;
        while (next <= limit) {
            yield current;
            let nextNumber = current + next;
            current = next;
            next = nextNumber;
        };
    },
};

// iterableFibonacciObject.limit = 10
// for (let item of iterableFibonacciObject) {
//     console.log(item);
// }

if (!Array.isArray(fibonacciArray)) {
    throw new Error('Invalid argument')
}

function fibonacciArrayRecurse(number, index, fibonacciArray) {
    if (!Array.isArray(fibonacciArray) || typeof number !== 'number' ||
        typeof index !== 'number') {
        throw new Error('Invalid argument')
    }
    index = index || 1;
    fibonacciArray = fibonacciArray || [0, 1].splice(0, number);

    if (++index < number) {
        fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2]);
        fibonacciArrayRecurse(number, index, fibonacciArray);
    }

    return fibonacciArray;
}


const fibonacciArrayRecursionMemo = (function () {
    const memo = {};

    return function pushFibonacci(number, fibonacciArray) {
        if (!Array.isArray(fibonacciArray) || typeof number !== 'number') {
            throw new Error('Invalid argument')
        }

        fibonacciArray = fibonacciArray || [];

        function getFibonacciNumber(number) {
            let result = 0;

            if (memo[number] !== undefined) {
                result = memo[number];
                return result;
            }

            if (number <= 1) {
                memo[number] = number;
                result = number;
                return result;
            } else {
                result +=
                    getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
                memo[number] = result;
            }
            return result;
        }

        if (--number >= 0) {
            fibonacciArray.unshift(getFibonacciNumber(number));
            pushFibonacci(number, fibonacciArray);
        }

        return fibonacciArray;
    };
})();
