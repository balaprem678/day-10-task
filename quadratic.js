var a,b,c,i,j,k;
a=2;
b=-4;
c=-6;
i=b*b;
j=4*a*c;
k=2*a;
console.log("the value of x is:"+i);
console.log("the value of x is:"+j);console.log("the value of x is:"+k);

iandj = i-j;
squareRoot = Math.sqrt(iandj);
console.log("the squareroot value:" +iandj);
quadraticEquation1 = (-b + squareRoot)/k;
console.log("Q.E for positive squareroot value:" +quadraticEquation1);
quadraticEquation2 = (-b - squareRoot)/k;
console.log("Q.E for negative squareroot value:" +quadraticEquation2);