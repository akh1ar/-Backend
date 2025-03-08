const  sum  = (a,b)=>a+b;
const  sub = (a,b)=>a-b;
const  mul = (a,b)=>a*b;
const  g = 9.8;
const  pI = 3.142;

module.exports = {
    sum : sum ,
    sub : sub,
    mul : mul,
    g: g,
    pI: pI
};
let obj  = {
    sum : sum ,
    sub : sub,
    mul : mul,
    g: g,
    pI: pI
};
module.exports =obj;
module.exports.avg = (a,b)=> (a+b)/2;
exports.con = (a,b)=> (a-b)*2;
/*module.exports=123; this is valid 
exports =2; this is invalid statement
*/