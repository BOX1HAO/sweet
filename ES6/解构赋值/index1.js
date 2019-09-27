// 数组解构赋值  赋值两边结构一致
let [a,b,c]=[1,2,3];
console.log(a);
console.log(b);
console.log(c);
// 赋予默认值
// undefined找不到，无值为空;null有值为空取null
let [d,e='猪']=['zhu',null];
console.log(d+e);

// 对象解构赋值
let {j,s}={j:'jack',s:'sex'};
console.log(j+s);
// 先赋值，再结构，添加（）
let k;
({k}={k:'kuaidian'});
console.log(k);

// 字符串解构赋值
const [z,x,y]='zhu';
console.log(z);
console.log(x);
console.log(y);