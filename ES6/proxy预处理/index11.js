let obj={
    add:function(val){
        return val+100;
    },
    name:'you are a dog'
}

let pro = new Proxy({
    add:function(val){
        return val+100;
    },
    name:'you are a dog'
},{
    get:function(target,key,proprety){
        console.log(key)
        return target[key];
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key} = ${value}`);
        return target[key]=value;
    }
}) 
console.log(pro.name)
pro.name='芶'
console.log(pro.name)

// let target = function(){
//     return 'you are a pig'
// }
// let hanler={
//     apply(target,ctx,agrs){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target,hanler);
// console.log(pro());