// 对象扩展运算符(...)
let arr1=['www','jspang','com'];
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);



// rest运算符
function jspang(first,...arg){
    for(let val of arg){
        // 新循环  for...of
        console.log(val);
    }
}
 
jspang(0,1,2,3,4,5,6,7);