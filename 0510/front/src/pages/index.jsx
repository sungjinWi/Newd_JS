import axios from "axios";
import { useState } from "react";

const useInput = (defaultValue) => {
    const [value,setValue] = useState(defaultValue);
    const onChange = e => {
        setValue(e.target.value)
    }

    console.log(value)
    return {
        value,
        onChange
    }
}

const Index = () => {
    const userid = useInput("")
    // const userid = {value:value,onChange:onChange} 
    
    // const [value,setValue] = useState("");
    // const onChange = e => {
    //     setValue(e.target.value)
    // }

    // return {
    //     value:value,
    //     onChange:onChange
    // }





    const userpwd = useInput("")



    const handleClick = async (e)=> {
        // alert("버튼 클릭")
        e.preventDefault();
        const result = await axios.post("http://localhost:3500",{userid:userid.value,userpwd:userpwd.value},{withCredentials:true})
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
            <input  type="text" name="userid" {...userid} />
            <input  type="text" name="userpwd" {...userpwd} />
        </div>
    )
}

export default Index;