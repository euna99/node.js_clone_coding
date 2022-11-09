import '../css/SignUp.css';

function SignUp ({closeModal}){
    return(
<div className="signUp_background">
    <div className = "signUp_wrapper">
        <div className="signUp_header">
        <button onClick={closeModal} 
        className="signUp_close"> 취소 </button>
        <span>회원가입</span>
        </div>
        <div className="signUp_inputValue">
    
            <div className="signUp_input_tit"> 이메일</div>
            <input className="signUp_input"
            placeholder='email'></input>
    
            <div className="signUp_input_tit"> 이름</div>
            <input className="signUp_input"
            placeholder='name'></input>

            <div className="signUp_input_tit">휴대폰 번호</div>
            <div className="signUp_select">South Korea +82</div>
            <div className="signUp_moblie">
            <input type="text" placeholder="(예시) 01013245768" name="mobile" data-testid="Input_mobile" className="signUp_input" value="">
            </input>
            <button type="button" data-testid="Button" disabled=""><span data-testid="Typography" color="var(--theme-palette-colors-black-100)">인증번호 받기</span>
            </button>
            </div>
            <div className="css-l9nhxs">
            <input type="text" placeholder="인증번호를 입력해주세요." name="authCode" data-testid="Input_authCode" readonly="" className="signUp_input" value=""/>
            </div>

            <div className="signUp_input_tit">비밀번호</div>
            <input className="signUp_input"
            placeholder='비밀번호를 입력해주세요'></input>
            <input className="signUp_input"
            placeholder='비밀번호를 다시 한번 입력해주세요'></input>
            
            <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-1d2ssup">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
        </div>
    </div>
</div>
    );

}

export default SignUp;