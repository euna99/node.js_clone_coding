import { useState } from "react";
import styled from 'style-component';

function Login() {

    let [loginId, setLoginId] = useState("");
    let [loginPassword, setLoginPassword] = useState("");
    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPassword, setSavedLoginPassword] = useState("");

    let sessionStorage = window.sessionStorage;
    // let sessionStorage = window.localStorage;

    return(
        <>
            <div>
                <Title>스타일 컴포넌트 </Title>
                ID : <input type="text" size={20} onChange={ (e)=>{
                    setLoginId(e.target.value)
                } } />
            </div>
            <div>
                PW : <input type="password" size={20} onChange={ (e)=>{
                    setLoginPassword(e.target.value)
                } } />
            </div>

            <div>
                <button onClick={ ()=>{ 
                    sessionStorage.setItem("loginId", loginId);
                    sessionStorage.setItem("loginPassword", loginPassword);

                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                } }>Login</button>

                <button onClick={ ()=>{
                    sessionStorage.clear();
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
                } }>Logout</button>

                <button onClick={ ()=>{
                    sessionStorage.removeItem("loginId");
                    setSavedLoginId(sessionStorage.getItem("loginId"));
                } }>loginId 삭제</button>

            </div>
            <div>
                sessionStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} 이다. 
            </div>
            <div>
                { JSON.stringify(sessionStorage) }
            </div>

        </>
    )
}
const Title=styled.div`
    color:red;
    font-size: 20px;
`;
export default Login;