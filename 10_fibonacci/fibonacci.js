const fibonacci = function(fibStep) {

    let steps = 0;
    if (isValid(fibStep)){
        steps = Number(fibStep);
    }else{
        return "OOPS";
    }

 let a = 0; 
 let b = 1;
 let c = 1;

 for (i=0; i<steps-1; i++){
    c = a + b;
    a = b;
    b = c;
 
 }
 console.log(c);
 return c;

};

function isValid(num){
    if(num>=0 && !isNaN(num)){
        return true;
    }else{
        return false;
    }
}
/* 
0  i = 0: a0 + b1 = c1   -> a=b, b=c          
1  i = 1: a1 + b1 = c2          
1  i = 2: a1 + b2 = c3                   
2  i = 3: a2 + b3 = c5                   
3  i = 4: a3 + b5 = c8                     
5  i = 5                       
8  i = 6                       
13 i = 7                       
21 i = 8                       

*/


// Do not edit below this line
module.exports = fibonacci;


