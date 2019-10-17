// Set声明    Set数组去重
let setArr = new Set(['zhu','niu','ma']);
// Set追加方法 add，数组追加方法 push
setArr.add('yang')
// 删除方法 delete
setArr.delete('ma')
console.log(setArr)
// 查找方法 has
console.log(setArr.has('zhu'))
// 全部删除方法 clear
setArr.clear('')
console.log(setArr)

// 输出方法
// for...of方法
let setArr1 = new Set(['zhu','niu']);
for(let its of setArr1){
    console.log(its)
}
// forEach方法
setArr1.forEach((value)=>console.log(value))
// 数组查看数量方法 length，Set查看数量方法 size
console.log(setArr1.size)



// Set是数组形式，WeakSet可以用于对象
let weak = new WeakSet();
let obj ={a:'hello',b:'hi'};
weak.add(obj);
console.log(weak)