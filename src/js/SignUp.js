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
            <div>
                이메일
            <input></input>
            </div>
            <div>
                이름
            <input></input>
            </div>
            <div>
                휴대폰 번호
            <input></input>
            </div>
        
        </div>
</div>
    );

}

export default SignUp;