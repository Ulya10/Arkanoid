// let beta = 35 * 10**(-13);
// //let lam = 10.64 * 10**(-7);
// //let c = 3*10**3;
// let na = 6.02*10**23;
// let sig = 4*10**(-58);
// //let e = 2.2*10**(-19);
// let e = 6.63*10**(-34)*((3*10**8)/lam);

// //let sig = (beta*e)/(na*c);
// //let beta = (sig*na*c)/e;
// let c = (beta*e)/(sig*na)
//console.log(Math.PI**(3/2));

//let tn = 0.7;
let x = 0.6;
let lam = 700 * 10**(-7);
//let i = 1.1 * 10**9;
//let d = 0.3;
let u = 15*10**(-6);
//let al = 1.1;
let l = 0.2;
let w = 11*10**(-4);
let t = 3*10**(-9);
let n = 5*10**(-14);

let i = (2*u)/(w**2*Math.PI**(3/2)*t);
//let l = (1-Math.exp(-al*d))/al;
//let n = ((1-tn)*lam*(x**2+9)*(x**2+1))/(8*Math.PI*i*l*x);
let tn = 1-((8*Math.PI*n*i*l*x)/(lam*(x**2+9)*(x**2+1)));

console.log(i, tn);