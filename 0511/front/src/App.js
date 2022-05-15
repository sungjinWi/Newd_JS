import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

// 조건부 렌더링
// 특정한 값(상태)이 true일 때 a 컴포넌트 false b 컴포넌트
// isLogin true 일 때 Profile, false Login
function App() {
  const [isLogin,setIsLogin] = useState(false);
  const c = 3

  // 부모 컴포넌트에서 상태 바꾸는 함수 만든다
  const clickToggle = () => {
    setIsLogin(!isLogin) // isLogin을 반대로 만든다
  }
  return (
    <>
      {
      isLogin
      ? <Profile onClick={clickToggle} />
      : <Login onClick={clickToggle} b={c} />
      }
    </>
  );
}

export default App;
