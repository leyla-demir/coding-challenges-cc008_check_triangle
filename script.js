const a = document.getElementById('sideA').value;
console.log("a", a)
const b = document.getElementById('sideB').value;
const c = document.getElementById('sideC').value;
console.log("c", c)
const buttonElement = document.getElementById('bttn');
const resultElement = document.getElementById('result');
console.log("resultElement", resultElement)

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  checkTriangle() {
    console.log(this.isTriangle());
    console.log(this.isScalene());
    console.log(this.isIsosceles());
    console.log(this.isEquilateral());

    return !this.isTriangle()
      ? alert('NOT trianle')
      : this.isEquilateral() || this.isIsosceles() || this.isScalene();
  }
  isTriangle() {
    if (
      (this.a + this.b > this.c) &
      (this.b + this.c > this.a) &
      (this.c + this.a > this.b)
    ) {
      return true;
    } else {
      return false;
    }
  }
  isEquilateral() {
    if ((this.a == this.b) & (this.a == this.c) & (this.c == this.b)) {
      return 'Eşkenar';
    } else {
      return false;
    }
  }
  isIsosceles() {
    if (this.a == this.b || this.a == this.c || this.c == this.b) {
      return 'İkizkenar';
    } else {
      return false;
    }
  }
  isScalene() {
    if ((this.a != this.b) & (this.a != this.c) & (this.b != this.c)) {
      return 'ÇeşitKenar';
    } else {
      return false;
    }
  }
}



buttonElement.addEventListener('click', () => {
  //   let triangle = new Triangle(a, b, c);
//   let triangle = new Triangle(a, b, c);
  let result = triangle.checkTriangle();
  resultElement.innerText = result 
});
