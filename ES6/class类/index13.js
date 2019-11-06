class Coder{
    name(val){
        console.log(val);
        return val;
    }
    sex(val){
        console.log(this.name('小白')+':'+'sex-'+val)
    }
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}

// 类的参数
// let dog = new Coder(1,2);
// console.log(dog.add())



// dog.name('小白');
// dog.sex('nan')

// 类的继承
class htmler extends Coder{

}
let dog = new htmler(1,2);
console.log(dog.add())