let state=1;

function step1(resolve,reject){
    console.log('1.开始-做饭')
    if(state==1){
        resolve('做饭-完成')
    }else{
        reject('做饭-未完成');
    }
}

function step2(resolve,reject){
    console.log('2.开始-吃饭')
    if(state==1){
        resolve('吃饭-完成')
    }else{
        reject('吃饭-未完成');
    }
}

function step3(resolve,reject){
    console.log('3.开始-洗碗')
    if(state==1){
        resolve('洗碗-完成')
    }else{
        reject('洗碗-未完成');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
});