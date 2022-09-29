import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const {isLogin, setIslogin} = useState(false);
  const navi = useNavigate();
  return (
    <div className="App">
      {isLogin ? <div>TEST</div> : <div><button onClick={()=>{navi('/login');}}></button></div> }
    </div>
  );
}

export default App;
