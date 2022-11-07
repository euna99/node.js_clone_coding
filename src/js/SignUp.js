import '../css/SignUp.css';

function SignUp ({closeSignUp}){
    return(
<div className="signUp_background">
    <div className = "signUp_wrapper">
        <div className="signUp_header">
        <button onClick={closeSignUp} 
        className="signUp_close"> 취소 </button>
        <span>회원가입</span>
        </div>
        <div className="signUp_inputValue">
            
            <div> 이메일</div>
            <input placeholder='email'></input>
    
            <div> 이름</div>
            <input placeholder='name'></input>

            <div>휴대폰 번호</div>
            <input></input>

            <div>비밀번호</div>
            <input></input>

        </div>
    </div>
</div>
    );

}

export default SignUp;