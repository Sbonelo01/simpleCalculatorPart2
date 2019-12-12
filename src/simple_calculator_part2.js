
class Calculator {
    constructor() {
        this.arr = [];
        this.last = 0;
    }
    
    add() {
        var sum = 0;
        //Loop through each number while adding it
        for(var counter = 0; counter < arguments.length; counter++) { 
            if(arguments[counter] == 'LAST') {
                arguments[counter] = this.last;
            }

            sum += arguments[counter];
            arguments[counter] = this.last;
            this.last = sum;
        }

        //Return final sum
        return sum;
    }

    multiply() {
        var product = 1;

        for (var counter = 0; counter < arguments.length; counter++) {
            if(arguments[counter] == 'LAST'){
                arguments[counter] = this.last;
            }

            product *= arguments[counter];
            arguments[counter] = this.last;
            this.last = product;
        }
        
        return product;
    }

    stringSlot(string){
        if(string == 'LAST'){
            return this.last();
        }
        if(string.includes('SLOT_') && !isNaN(string[string.length -1])){
            var slotNumer = string[string.length -1];
            return this.arrSlots[slotNumber];
        }
        return 0;
    }

    //last adds/multiplies a given argument by the last returned value
    last() {
      return this.lastValue;
     }

     setSlot(reg) {
         this.arrSlots[slotNUmber] = this.lastValue;
     }

     getSlot(slotNumber) {
        return this.arrSlots[slotNumber];
     }
}

module.exports = { Calculator }
