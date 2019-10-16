// 对象赋值
let name = '猪';
let sex = '男';
let obj = {name,sex}
console.log(obj)

// key值构建
let key = 'skill';
var obj1={
    [key]:'web'
}
console.log(obj1)

// 自定义对象方法
let obj2={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj2.add(1,2))

// is()用法
// ===同值相等，is严格相等
console.log(+0===-0);
console.log(NaN===NaN);
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN))

// 对象合并 assign
let a={a:'zhu'};
let b={b:'niu'};
let c={c:'ma'};
let d=Object.assign(a,b,c);
console.log(d)