let json ={
    name:'guawazi',
    skill:'gua',
    jibie:'1'
}
console.log(json.name);

var map = new Map();
// map增删查
// 添加 set
map.set(json,'iam');
console.log(map)
map.set('guawazi',json);
console.log(map)
// 取值 get
console.log(map.get(json));
// 删除特定值 delete
map.delete(json)
console.log(map)
// 删除所有值 clear
// map.clear();
// 查看有多少个值  size
console.log(map.size)
// 查找值是否存在 has
console.log(map.has('gauwazi'))
