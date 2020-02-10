let Calculator = class {
    constructor() {
        this.arr = [];
        this.last = 0;
    }

    add(...args) {
        var sum = 0;
        //Loop through each number while adding it
        for (var counter = 0; counter < args.length; counter++) {
            if (args[counter] == 'LAST') {
                args[counter] = this.last;
            }

            sum += args[counter];
            args[counter] = this.last;
            this.last = sum;
        }

        //Return final sum
        return sum;
    }

    multiply(...args) {
        var product = 1;

        for (var counter = 0; counter < args.length; counter++) {
            if (args[counter] == 'LAST') {
                args[counter] = this.last;
            }

            product *= args[counter];
            args[counter] = this.last;
            this.last = product;
        }

        return product;
    }

    stringSlot(string) {
        if (string == 'LAST') {
            return this.last();
        }
        if (string.includes('SLOT_') && !isNaN(string[string.length - 1])) {
            var slotNumer = string[string.length - 1];
            return this.arrSlots[slotNumber];
        }
        return 0;
    }

    //last adds/multiplies a given argument by the last returned value
    last() {
        return this.lastValue;
    }

    setSlot(reg) {
        this.arrSlots[slotNumber] = this.lastValue;
    }

    getSlot(slotNumber) {
        return this.arrSlots[slotNumber];
    }
}


module.exports = {
    Calculator
}
