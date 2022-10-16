const repeatString = function(str, num) {
    if(num < 0){
        return buildStr = "ERROR";
    }else{
        let buildStr = '';
        for(let i = 0; i<num; i++){
            buildStr += str;
        }
        return buildStr;
    }
    
};


// Do not edit below this line
module.exports = repeatString;