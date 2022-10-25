const palindromes = function (t) {
//need to drop punctuation?
    
    const cleanText = t.replace(/\W/g, '')
    const forward = Array.from(cleanText.toLowerCase());
    
   forward.reverse();
    

    forwardStr = forward.join('');
    backwardStr = forward.reverse().join('');

    console.log(`Forward: ${forwardStr}`);
    console.log(`Backward: ${backwardStr}`); 

    return (forwardStr===backwardStr ? true:false);

   
};

function cleanStr(text){
    return text.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;
