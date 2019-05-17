class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this._width = width;
        this._height = height;
    }
    get width() { return this._width }
    set width(w) { this._width = w }

    static defaultRectangle() {
        return new Rectangle("default", 0, 0, 100, 100);
    }
}

var rect = new Rectangle(1, 2, 3, 4, 5); //rect object doesnt have rect function
rect.width = 50;
console.log(rect);

console.log(Rectangle); //the Rectangle object has static function
