let calc = require('../src/simpleCalculator-2');

let calculator = new calc;

// console.log(calculator.add(1,2));
// console.log(calculator.add(4,5));
// console.log(calculator.add(3,8));
// console.log(calculator.multiply(4,2));

// console.log(calculator.last());

 describe("Simple calculator that add two numbers", function () {
     it("should be able to add two numbers", function(){
         expect(calculator.add(-1,-1)).toEqual(-2);
     });
 });

 describe("Simple calculator that add two numbers", function () {
     it("should be able to add many numbers", function(){
         expect(calculator.add(1,2,3,4)).toEqual(10);
     });
 });

 describe("Simple calculator that multiply two numbers", function () {
     it("should be able to multiply two numbers", function () {
         expect(calculator.multiply(1,2)).toEqual(2);
     });
 });

 describe("Simple calculator to multiply many values", function () {
     it("Should be able multiply many values", function () {
         expect(calculator.multiply(1,2,3,4)).toEqual(24);
     });
 });