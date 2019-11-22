
module.exports = class calculator {
    constructor() {
        this.arr = [];
        this.prev = 0;
    }
    
    //Add multiple values

    add() {
        var sum = 0;
        //Loop through each number while adding it
        for(var counter = 0; counter < arguments.length; counter++) { 
            if(arguments[counter] == 'LAST') {
                arguments[counter] = this.prev;
            }

            sum += arguments[counter];
            arguments[counter] = this.prev;
            this.prev = sum;
        }

        //Return final sum
        return sum;
    }

    //Multiply multiple values

    multiply() {
        var product = 1;

        for (var counter = 0; counter < arguments.length; counter++) {
            if(arguments[counter] == 'LAST'){
                arguments[counter] = this.prev;
            }

            product *= arguments[counter];
            arguments[counter] = this.prev;
            this.prev = product;
        }
        
        return product;
    }

    last(){
        var lastNumber = sum + arguments[counter] || product + arguments[counter];
    }
}   

    //last adds/multiplies a given argument by the last return value

    last() {
      return this.prev;
    }

    	if (!Array.prototype.last){
         Array.prototype.last = function(){
             return this[this.length - 1];
         };
     };

     setSlot(reg) {
         this.arr.push[reg - 1];
         var slot = this.arr[reg - 1];
         return slot;
     }

     getSlot(reg) {
        
     }
};
