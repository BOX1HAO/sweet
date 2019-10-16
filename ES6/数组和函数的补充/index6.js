// 对象的函数解构   把后端获取到的JSON格式数据当作参数，传递到函数内部进行处理
let json = {
    a:'zhu',
    b:'niu'
}
function fun({a,b}){
    console.log(a,b)
}
fun(json);

// 数组的函数解构
let arr = ['zhu','niu','ma']
function fun1(a,b,c){
    console.log(a,b,c)
}
fun1(...arr)

// 判断数组或对象是否存在x    in方法
// 判断对象
let obj = {
    A:'a',
    B:'b'
}
console.log('A' in obj)
// 判断数组
let arr1 = [,,,]
console.log(0 in arr1)

// 数组的遍历方法
// forEach方法
let arr2 = ['zhu','niu','ma']
arr2.forEach((val,index)=>console.log(index,val))
// filter方法
let arr3 = ['zhu','niu','ma']
arr3.filter(x=>console.log(x))
// sonme方法
let arr4 = ['zhu','niu','ma']
arr4.some(x=>console.log(x))
// map方法   替代的作用
let arr5 = ['zhu','niu','ma']
console.log(arr5.map(x=>'web'))
// join方法
let arr6 = ['zhu','niu','ma']
console.log(arr6.join('-'))
// toString方法
let arr7 = ['zhu','niu','ma']
console.log(arr7.toString())