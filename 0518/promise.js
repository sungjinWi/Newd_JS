/* 
    promise -> callback 지옥 벗어 나고 싶다

    객체

*/ 

const a = new Promise((resolve,reject)=>{
    for(let i=0; i<10; i++) {
        console.log(i)
    }
    try {
        if(i==1){
            console.log("hello")
        }

        if(i==2){
            console.log("world")
        }
        resolve("hahaha")
    }
    catch(e){
        reject("hohohoho") //rejected with the reason "hohoho"
    }
})


a // promise 객체
.then( a => console.log(a))
.catch(a => console.log(a))

const b = new Promise((resolve,reject)=>{
    setTimeout(()=>{ //background에 들어가니까 reject가 먼저됨
        resolve("aaaa")
    },1000)
    reject("바로 에러")
})

b // promise 객체
.then( b => console.log(b))
.catch(b => console.log(b))