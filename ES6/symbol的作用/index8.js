// Symbol的申明
let xxx = Symbol('gggg')
console.log(xxx)
console.log(xxx.toString())

// 对象中的用法
let jspang =Symbol()
let obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang])
obj[jspang]='web'
console.log(obj[jspang])

let object ={name:'jspang',skill:'web'}
let age = Symbol()
object[age]=22
// console.log(object)
for(let its in object){
    console.log(object[its])
}
console.log(object[age])