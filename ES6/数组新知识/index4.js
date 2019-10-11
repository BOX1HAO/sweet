// json数组格式
let json ={
    '0':'猪',
    '1':'牛',
    '2':'马',
    length:3
}
// json数组转换成数组   Array.from()
let arr = Array.from(json)
console.log(arr)
// tit格式转换成数组   Array.of()
// '['猪'，'牛','马']'
let arr1 = Array.of('猪','牛','马')
console.log(arr1)
//查找实例方法   find()
let arr2 = ['猪','牛','马']
console.log(arr2.find(function(value,index,arr){
    return value =='鸡';
}))
// 替换实例方法  fill(填充变量，开始填充的位置，填充到的位置)
let arr3 = ['猪','牛','马']
arr3.fill('鼠',1,2)
console.log(arr3)
// 数组循环   for (of)
for(let [index,value]  of arr3.entries()){
    console.log(index+':'+value)
}
// 数组循环   for (of)中的entries方法
// 不规则手动循环
let list = arr3.entries();
console.log(list.next().value);
console.log('-----------');
console.log(list.next().value);
console.log('***********');
console.log(list.next().value);
console.log('@@@@@@@@@@');