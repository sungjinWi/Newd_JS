const call = () => {
    console.log("call 실행")
    return "hello";
}

const send = () => {
    console.log("send 실행")
    return "world";
}

// call 이라는 함수가 name이 실행되고 나서 실행되었으면 좋겠다
// send 이라는 함수가 name이 실행되고 나서 실행되었으면 좋겠다

// 근데 선택적으로 하고 싶다
// 함수 자체를 인자로 넣는 callback

const name = (callback) => {
    callback();
    return "sungjin"
}

name(call)

// const name = (type) => {
//     if(type === "call"){
//         call()
//     }
//     else{
//         send()
//     }
// }