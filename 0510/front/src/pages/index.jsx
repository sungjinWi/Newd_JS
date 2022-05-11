import axios from "axios";

const Index = () => {
    const handleClick = async (e)=> {
        // alert("버튼 클릭")
        e.preventDefault();
        const result = await axios.post("http://localhost:3500",null,{withCredentials:true})
        console.log(result)
    }
    
    /*
        handleClick 
        post /getCookie
        router middleware -> cookie-parse로 cookie 생성,
        응답을 줌,
        response header 에 set-cookie 정보가 있어야한다
        브라우저에서 생성
        credential
    */

    return(
        <div>
            <button onClick={handleClick}>서버에 요청</button>
        </div>
    )
}

export default Index;