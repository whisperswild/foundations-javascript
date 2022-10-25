const add = function(a, b) {
  let result = parseFloat(a + b);
  return result;
};

const subtract = function(a, b) {
  let result = parseFloat(a - b);
  return result;
};

const sum = function() {
	//add up any number of numbers

  let result = 0;
  let args = arguments[0];
  for (a in args){
    if(args.length>0){

      result += args[a];
    }else{
      return 0;
      break;
    }
  }
  return result;

};

const multiply = function() {
  let result = 1;
  let nums = arguments[0]
  
    for(a in nums){
      result *= parseFloat(nums[a]);
    }

    return result;
  
};

const power = function(a, b) {
	let result = parseFloat(a ** b);
  return result;
};

const factorial = function(a) {
	//factorial multiplies the number by 0, 1, 2, 3, etc. So 4! would be 1*2*3*4
  let i = 1;
  let result = 1;
  while (i<= a){
    result *= i;
    i++;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
