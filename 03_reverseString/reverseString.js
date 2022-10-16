const reverseString = function(str) {
    //reverseString('hello there') // returns 'ereht olleh'

    let reverseString = Array.from(str);
    let returnString = '';

    reverseString = reverseString.reverse();

    for(letter in reverseString){
        returnString += reverseString[letter];
        //console.log(reverseString[letter]);
    }
    
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
