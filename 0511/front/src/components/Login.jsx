import axios from "axios"
/*
    프론트 먼저?
    백을 먼저?

    API설계가 되있으면 상관없으요
 */
const Login = (props) => {
    // console.log(props)

    const handleSubmit = async e => {
        e.preventDefault();

        const {userid,userpw} = e.target
        try{
            const result = await axios.post("http://localhost:3500/user/login",{ //return promise
                userid:userid.value,
                userpw:userpw.value
            },{
                withCredentials:true,
            }) 
            const {response, error} = result.data
            if(error) return alert(error);
            else {
                console.log(`${response.userid}`)
                props.onClick()
            }
        }
        catch (e) {
            alert("접속 불량")
        }
        

        // props.onClick(); // 백엔드에서 응답이 도착했을 때 실행되는 코드
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>로그인 화면</h2>
                <input type="text" name="userid" />
                <input type="password" name="userpw" />
                <input type="submit" value="로그인"/>
            </form>
        
        </>
    )
}

export default Login;