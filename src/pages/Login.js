import object from './Login.module.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login(){
    const navi = useNavigate()
    const LoginAction=_=>{
        if(id !== "" && password !== ""){
            const send_param = {
                username: id,
                password: password,
              };
            axios.post("http://localhost:8000/login", send_param)
                .then((Response) => {
                    const { access_token } = Response.data;
		            // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                    navi('/home');
                    
                })
                .catch((Error) => {
                    if(Error.response.status == 400){
                        alert(Error.response.data.detail);
                    }
                });
              
        }else {
        alert("Wrong Answer");
        }
    }
    const onchange=e=>{
        if(e.target.type === 'text'){
            setId(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }
    const keydown=e=>{
        if(e.key === 'Enter'){
            LoginAction();
        }
    }
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div>
            <p>Login</p>
            <input type="text" placeholder="ID" onChange={onchange}></input>
            <input type="password" placeholder="password" onChange={onchange} onKeyDown={keydown}></input>
            <button onClick={LoginAction}>Login</button>
        </div>
    );
}

export default Login;