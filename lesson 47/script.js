'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height,width,text,bgColor) {
    super(height,width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Предмет: ${this.text}, цвет: ${this.bgColor}, площадь стола: ${div.calcArea()} мм2`);
  }
}

const div = new ColoredRectangleWithText(10, 25, 'Стол', 'красный');
// console.log(div);
div.showMyProps();
// console.log(div.calcArea());
// const square = new Rectangle(10,10);
// const bord = new Rectangle(14,10);

// console.log(square.calcArea());
// console.log(bord.calcArea());

