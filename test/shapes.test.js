const { Triangle } = require('../index.js');
describe('testShapes', () => {
   describe('Testing blue background', () => {
      it('should return the svg code for the triangle shape', () => {
         const shape = new Triangle();
         shape.bgColor = "blue";
         expect(shape.buildSVGline2()).toEqual('<polygon points="150,0 0,200 300,200" fill="blue"/>');
      });
   });
});

const { Square } = require('../index.js');
describe('testShapes', () => {
   describe('Testing blue background', () => {
      it('should return the svg code for the square shape', () => {
         const shape = new Square();
         shape.bgColor = "blue";
         expect(shape.buildSVGline2()).toEqual('<rect width="300" height="200" fill="blue"/>');
      });
   });
});

const { Circle } = require('../index.js');
describe('testShapes', () => {
   describe('Testing blue background', () => {
      it('should return the svg code for the circle shape', () => {
         const shape = new Circle();
         shape.bgColor = "blue";
         expect(shape.buildSVGline2()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
      });
   });
});

module.exports = {Triangle, Square, Circle};
   