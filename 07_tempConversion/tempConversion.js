const ftoc = function(temp) {
  let conversion = (temp - 32) / 1.8;
  conversion = Math.round(conversion*10) / 10;
  return conversion;
};

const ctof = function(temp) {
  let conversion = (temp * 1.8) + 32;
  conversion = Math.round(conversion*10) / 10;
  return conversion;
};
//Math.round(num * 10) / 10
//f->c: (C*1.8)+32
//c->f:  (f-32)/1.8


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
