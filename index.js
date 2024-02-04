const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');

class Shape {
   constructor(shape, bgColor, letterColor, initials) {
      this.shape = shape;
      this.bgColor = bgColor;
      this.letterColor = letterColor;
      this.initials = initials;
   }

   setBgColor() {
      this.bgColor = bgColor
   }
   setletterColor() { }
   setInitials() { }

   buildSVG2line() {
      const line2 = `<rect width="300" height="200" fill="color"/>`
      return line2;
   }

   buildSVGCode() {
      const line1 = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>`;
      const line3 = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
      return line1 + this.buildSVG2line() + line3;
   }

}

class Square extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVG2line() {
      return `<rect width="300" height="200" fill="${this.bgColor}"/>`};

}

class Circle extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVG2line = `<circle cx="150" cy="100" r="80" fill="${this.bgColor}"/>`;
}

class Triangle extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVG2line = `<polygon points="150,0 0,200 300,200" fill="${this.bgColor}"/>`;
}

function makeSquare(shape, bgColor, letterColor, initials){
   const square = new Square(shape, bgColor, letterColor, initials);
   // fs.writeFile = square.buildSVGCode();

}

function makeCircle(shape, bgColor, letterColor, initials){
   const circle = new Circle(shape, bgColor, letterColor, initials)
   // fs.writeFile = circle.buildSVGCode();
   }

function makeTriangle(shape, bgColor, letterColor, initials){
   const triangle = new Triangle(shape, bgColor, letterColor, initials)
   // fs.writeFile = triangle.buildSVGCode();

}

console.log("Starting questions");
inquirer.prompt(questions)
   .then((answers) => {
      console.log("Shape name is " + answers.shapeName);
      console.log("Background color chosen is: " + answers.bgColor);
      console.log("Letter color is: " + answers.letterColor);
      console.log("Initials is :" + answers.initials);
      if (answers.shapeName === 'Square'){
         console.log("I am going to make a square");
         makeSquare(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
      }else if (answers.shapeName === 'Circle'){
         console.log("I am going to make a circle");
         makeCircle(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
      }else{
         console.log("I am going to make a triangle");
         makeTriangle(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
      }
   })
   .catch((error) => {
      console.error('Prompt failed', error);
   })










// const shape = new Shape(shape, bgColor, letterColor, initials);
// const square = new Square(shape, bgColor, letterColor, initials);
// const circle = new Circle(shape, bgColor, letterColor, initials);
// const triangle = new Triangle(shape, bgColor, letterColor, initials);
