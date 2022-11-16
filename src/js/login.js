import { useState } from "react";
import styled from 'style-component';

function Login() {

    let [loginId, setLoginId] = useState("");
    let [loginPassword, setLoginPassword] = useState("");
    let [savedLoginId, setSavedLoginId] = useState("");
    let [savedLoginPassword, setSavedLoginPassword] = useState("");

    // let sessionStorage = window.sessionStorage;
    // let sessionStorage = window.localStorage;


    const Title=styled.div`
    color:${props=>props.fontColor};
    font-size: 20px;
    `;
    return(
        <>  
            <Title fontColor="yellow">스타일 컴포넌트 </Title>
            <div>
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

//조건부 스타일링에 용이함 
export default Login;


import React, {useState} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form , Input , Checkbox , Button} from 'antd';

const Signup = () =>{
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };

    // Coustom Hook 이전
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    return (
        <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
        </Head>
        <AppLayout>
        <Form onSubmit={onSubmit} style={{padding:10}}>
            <div>
                <label htmlFor="user-id">아이디</label><br/>
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label><br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label><br/>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호체크</label><br/>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의 합니까?</Checkbox>
                {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{marginTop:10}}>
                <Button type="primary" htmlType="submit" >가입하기</Button>
            </div>
        </Form>
        </AppLayout>
        </>
    );
};

export default Signup;