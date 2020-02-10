const {
    Calculator
} = require('../src/simple_calculator_part2.js');

describe('FUNCTIONAL TESTS', function() {

            let calculator_instance = new Calculator();

            it('Should return 0', function() {
                expect(calculator_instance.add(1, 2)).toBe(3);
            });

            it('Should return -2', function() {
                expect(calculator_instance.add(1, 2, 3, 4)).toBe(10);
            });

            it('Should return last result when adding', function() {
                calculator_instance.add(1, 2)
                expect(calculator_instance.last).toEqual(3);
            });

            it('Should return last result when multiplying', function() {
                    calculator_instance.multiply(3, 5)
                    expect(calculator_instance.last).toEqual(15);
                    });


                it('Should allow last as a parameter', function() {
                    calculator_instance.add(1, 2)
                    expect(calculator_instance.add('LAST', 5)).toEqual(8);
                });

                xit('Should return ', function() {
                    calculator_instance.add(1, 2);
                    calculator_instance.setSlot(1);
                    expect(calculator_instance.getSlot(1)).toEqual(3);
                });

                it("should allow memory slot as a paremeter", function() {
                    calculator_instance.add("LAST", 10);
                    calculator_instance.add("SLOT_1,", 5);
                    calculator_instance.multiply("SLOT_2", 2);
                });

            });
