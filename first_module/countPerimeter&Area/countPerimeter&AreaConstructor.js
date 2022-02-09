function Rectangle(width, heigth) {
    this.width = width;
    this.heigth = heigth;

    this.perimeter = function () {
        return 2 * (this.width + this.heigth);
    };
    this.area = function () {
        return this.width * this.heigth;
    };
}

function Triangle(firstCathetus, secondCathetus, hypotenuse) {
    this.firstCathetus = firstCathetus;
    this.secondCathetus = secondCathetus;
    this.hypotenuse = hypotenuse;

    this.perimeter = function () {
        return this.firstCathetus + this.secondCathetus + this.hypotenuse;
    };
    this.area = function () {
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

function Circle(radius) {
    this.radius = radius;

    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    this.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
}