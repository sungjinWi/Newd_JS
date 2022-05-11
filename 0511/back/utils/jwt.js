// const crypto = require("crypto-js")
const crypto = require("crypto")

const header = {
    "alg": "HS256",
    "typ": "JWT"
}

const payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}

// base64

// console.log( Buffer.from(JSON.stringify(header)) ) // 16진수

const encodingHeader = Buffer.from( JSON.stringify(header) )
                             .toString("base64")
                             .replace(/[=]/g,'');

// console.log(encodingHeader)

const decodingHeader = JSON.parse( Buffer.from( encodingHeader, "base64").toString() )
// console.log(decodingHeader)



const encodingPayload = Buffer.from( JSON.stringify(payload) )
                             .toString("base64")
                             .replace(/[=]/g,'');


// console.log(encodingPayload)

const decodingPayload = JSON.parse( Buffer.from( encodingPayload, "base64").toString() )
// console.log(decodingPayload)


// 단방향 암호화를 위한 SHA 256
// const signature = crypto.HmacSHA256(`${encodingHeader}.${encodingPayload}`,"").toString() // 해쉬값
const signature = crypto.createHmac("sha256","ingoo")
                        .update(`${encodingHeader}.${encodingPayload}`)
                        .digest("base64")
                        .replace(/[=]/g,'')

// console.log(signature)




// console.log(`${encodingHeader}.${encodingPayload}.${signature}`);




// =============================================================


const encoding = (value) => {
    return Buffer.from( JSON.stringify(value))
    .toString("base64")
    .replace(/[=]/g,'')
}

const createToken = (state) => {
    const salt = 'ingoo'
    const header = { "alg": "HS256","typ": "JWT" }
    const payload = { ...state }

    const encodingHeader = encoding(header);
    const encodingPayload = encoding(payload);
    const encodingSignauture = crypto.createHmac("sha256",salt)
                                     .update(`${encodingHeader}.${encodingPayload}`)
                                     .digest("base64")
                                     .replace(/[=]/g,'');

    return `${encodingHeader}.${encodingPayload}.${encodingSignauture}`;
}

console.log(createToken({name:"ingoo"}))


/*
    1. JWT 토큰 만들기 구현

    2. 로그인 로직 이해하기
        2-1. 로그인 화면 필요
            2-1-1. 리액트 디렉토리 만들어야함
            
        2-2. Back 서버에 내용을 전달 (post body(userid,userpw))
        2-3. Back 에서 body(userid,userpw) 읽고,
        2-4. Back에서 userid,userpw 에 대한 DB조회
        2-5. DB조회에 따른 로직
            2-5-1. 조회가 안되었을때
                쿠키생성 x, 브라우저에게 오류를 전달
            2-5-2. 조회가 되었을떄
                쿠키생성, 브라우저에 전달
*/