import '../css/SignUp.css';

function SignUp ({closeSignUp}){
    return(
<div className="signUp_background">
        <div className = "signUp_wrapper">
            <div className="signUp_header">
              회원가입
            <button onClick={closeSignUp}
                className="sign_close_btn"> x </button>
            </div>

            <div>
                이메일
            <input></input>
            </div>
        
        </div>
</div>
    );

}

export default SignUp;