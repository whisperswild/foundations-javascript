const sumAll = function(a, b) {
    let c = a;
// sort numbers
//negative numbers
//no numbers
    let counter = 0;
    if(typeof(a) === "string" || typeof(b) === "string"){
        return "ERROR";
    }


    if (!isNaN(a) || !isNaN(b)){
        if (a >= 0 && b >= 0){

            if(a>b){
                c = a;
                a = b;
                b = c;
            }

            for (i = a; i<=b; i++){

                
                counter += i;
            }
            return counter;
        }else{
            return "ERROR";
        }
    }else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
