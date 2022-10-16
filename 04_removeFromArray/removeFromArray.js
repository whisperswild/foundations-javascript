const removeFromArray = function() {
    let testArray = Array.from(arguments[0]);

    for (let i = 1; i < arguments.length; i++){
        if(testArray.indexOf(arguments[i]) === -1){
            continue;
        }
        else{
            testArray.splice(testArray.indexOf(arguments[i]),1);
        }
    }
    return testArray;

};


//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]


// Do not edit below this line
module.exports = removeFromArray;
