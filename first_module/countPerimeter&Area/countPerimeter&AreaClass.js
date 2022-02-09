class Figure {
    constructor() {
        if (this.constructor === Figure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    perimeter() { };
    area() { };
}

class Rectangle extends Figure {
    constructor(width, heigth) {
        super();
        this.width = width;
        this.heigth = heigth;
    }

    perimeter() {
        return 2 * (this.width + this.heigth);
    };

    area() {
        return this.width * this.heigth;
    };
}

class Triangle extends Figure {
    constructor(firstCathetus, secondCathetus, hypotenuse) {
        super();
        this.firstCathetus = firstCathetus;
        this.secondCathetus = secondCathetus;
        this.hypotenuse = hypotenuse;
    }

    perimeter() {
        return this.firstCathetus + this.secondCathetus + this.hypotenuse;
    };

    area() {
        if (!(
            this.firstCathetus + this.secondCathetus > this.hypotenuse &&
            this.firstCathetus + this.hypotenuse > this.secondCathetus &&
            this.secondCathetus + this.hypotenuse > this.firstCathetus
        )) {
            return false;
        };
        const semiPerimeter = (this.firstCathetus + this.secondCathetus + this.hypotenuse) / 2;
        const area = Math.sqrt((semiPerimeter *
            (semiPerimeter - this.firstCathetus) *
            (semiPerimeter - this.secondCathetus) *
            (semiPerimeter - this.hypotenuse)));
        return area;
    };
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    };
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    };
}