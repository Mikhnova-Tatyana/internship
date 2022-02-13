const trafficLights = {

    colors: ['red', 'yellow', 'green', 'yellow'],
    set setLimit(limit) {
        this.setLimit = limit;
    },
    [Symbol.iterator]() {
        return {
            colors: this.colors,
            limit: this.limit,
            counter: 0,
            index: 0,
            next() {
                if (++this.counter <= this.limit) {
                    let result = {
                        value: this.colors[this.index],
                        done: false,
                    };
                    if (this.index === 3) {
                        this.index = 0;
                    } else {
                        ++this.index;
                    }
                    return result;
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                };
            },
        };
    },
}

// trafficLights.limit = 10

// for (let item of trafficLights) {
//     console.log(item);
// }


function* showColors() {
    let colors = ['red', 'yellow', 'green', 'yellow'];
    for (let color of colors) {
        yield color;
    }
};

function* trafficLights(limit) {
    let counter = 0;
    while (counter++ < limit) {
        yield* showColors();
    }
}

// for (let item of trafficLights(2)) {
//     console.log(item);
// }