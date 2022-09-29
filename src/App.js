import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const {isLogin, setIslogin} = useState(false);
  const navi = useNavigate();
  return (
    <div className="App">
      {isLogin ? <div>로그인 상태 입니다.</div> : <div><button onClick={()=>{navi('/login');}}>로그인이 필요합니다.</button></div> }
    </div>
  );
}

export default App;
