const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


class Shape {
   constructor(shape, bgColor, letterColor, initials) {
      this.shape = shape;
      this.bgColor = bgColor;
      this.letterColor = letterColor;
      this.initials = initials;
   }
   buildSVGCode() {
      const line1 = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">`;
      const line3 = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letterColor}">${this.initials}</text></svg>`;
      return line1 + this.buildSVGline2() + line3;
   }
}

class Square extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVGline2() {
      return `<rect width="300" height="200" fill="${this.bgColor}"/>`
   };
}

class Circle extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVGline2() {
      return `<circle cx="150" cy="100" r="80" fill="${this.bgColor}"/>`;
   };
}

class Triangle extends Shape {
   constructor(shape, bgColor, letterColor, initials) {
      super(shape, bgColor, letterColor, initials)
   }
   buildSVGline2() {
      return `<polygon points="150,0 0,200 300,200" fill="${this.bgColor}"/>`;
   };
}

function createFile(shapeType) {
   fs.writeFile('logo.svg', shapeType.buildSVGCode(), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg!'));
}

console.log("Starting questions");
inquirer.prompt(questions)
   .then((answers) => {
      if (answers.shapeName === 'Square') {
         const square = new Square(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
         createFile(square);
      } else if (answers.shapeName === 'Circle') {
         const circle = new Circle(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
         createFile(circle);
      } else {
         const triangle = new Triangle(answers.shapeName, answers.bgColor, answers.letterColor, answers.initials);
         createFile(triangle);
      }
   })
   .catch((error) => {
      console.error('Prompt failed', error);
   })


   module.exports = {Triangle, Square, Circle};
   