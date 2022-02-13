function Rectangle(width, heigth) {
    if (typeof width !== 'number' || typeof heigth !== 'number') {
        throw new Error('Invalid argument');
    }
    if (width < 0 || heigth < 0) {
        throw new Error('length and width must be greater than zero');
    }
    this.width = width;
    this.heigth = heigth;
}

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.heigth);
};
Rectangle.prototype.area = function () {
    return this.width * this.heigth;
};

function Triangle(firstCathetus, secondCathetus, hypotenuse) {
    if (typeof firstCathetus !== 'number' || typeof secondCathetus !== 'number' ||
        typeof hypotenuse !== 'number') {
        throw new Error('Invalid argument');
    }
    if (firstCathetus < 0 || secondCathetus < 0 || hypotenuse < 0) {
        throw new Error('argument must be greater than zero');
    }
    this.firstCathetus = firstCathetus;
    this.secondCathetus = secondCathetus;
    this.hypotenuse = hypotenuse;
}

Triangle.prototype.perimeter = function () {
    return this.firstCathetus + this.secondCathetus + this.hypotenuse;
}

Triangle.prototype.area = function () {
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


function Circle(radius) {
    if (typeof radius !== 'number') {
        throw new Error('Invalid argument');
    }
    if (radius < 0) {
        throw new Error('argument must be greater than zero');
    }
    this.radius = radius;
}

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
}