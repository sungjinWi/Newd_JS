const time = () => (parseInt(Math.random() * 10)+1)*1000


// 콜백 지옥

// const 아반떼 = (callback) => {
//     setTimeout(()=> {
//         console.log("아반떼 end")
//         callback()
//     },time())
//     console.log("아반떼 go")
// }
// const 소나타 = (callback) => {
//     setTimeout(()=> {
//         console.log("소나타 end")
//         callback()
//     },time())
//     console.log("소나타 go")
// }
// const 제네시스 = (callback) => {
//     setTimeout(()=> {
//         console.log("제네시스 end")
//         callback()
//     },time())
//     console.log("제네시스 go")
    
// }

// console.log("경기시작")
// 아반떼(()=> 
//     소나타(()=>
//         제네시스(()=>
//             console.log("경기종료")
//         )
//     ) 
// )



// 프로미스

// const 아반떼 = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             resolve("아반떼 end")
//         },time())
//         console.log("아반떼 go")
//     })
// }

// // 아반떼().then(a=>{
// //     console.log(a)
// //     return "a" // then method 안에서 쓰는 callback의 return은 promise 객체로 반환됨
// // }).then(data=>console.log(data))

// 아반떼()
// .then(data=>{
//     console.log(data)
//     return 소나타()
// })
// .then(data=>{
//     console.log(data)
//     return 제네시스();
// })
// .then(data =>{
//     console.log(data)
//     console.log("경기 끝")
// })

// const 소나타 = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             resolve("소나타 end")
//         },time())
//         console.log("소나타 go")
//     })
// }
// const 제네시스 = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             resolve("제네시스 end")
//         },time())
//         console.log("제네시스 go")
//     })
// }


const 아반떼 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("아반떼 end")
        },time())
        console.log("아반떼 go")
    })
}

const 소나타 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("소나타 end")
        },time())
        console.log("소나타 go")
    })
}

const 제네시스 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("제네시스 end")
        },time())
        console.log("제네시스 go")
    })
}


async function main(){
    console.log("경기시작")
    const result = await 아반떼()
    console.log(result)
    const result2 = await 소나타()
    console.log(result2)
    const result3 = await 제네시스()
    console.log(result3)
    console.log("경기끝")
    return "a"
}

main().then(data=>console.log(data))

async function a () {} //return promise

useEffect(a // 실행되면 return promise
    ,[]) // 



useEffect( ()=>{
    a(); //return promise
} // return nothing
,[])