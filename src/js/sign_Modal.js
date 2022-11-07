import { useEffect, useState } from 'react';
import '../css/Sign.css';
// import SignUp from './SignUp';

function SignModal({showSignUp ,closeModal}) {
    // const[closebtn,setModalOpen]=useState(true);
    const User = {
        email: 'a653bc@naver.com'
        //배열로 선언받고 그중에 하나가 로그인 되면  alert('로그인에 성공했습니다.') 띄우고 싶음 
    }
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    useEffect(() => {
        if(emailValid===true ) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [emailValid]);

      const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };

    //   const onClickConfirmButton = () => {
    //     if(email ===User.email) {
    //       alert('비밀번호를 입력하세요')
    //       setModal(2);
    //     } else {
    //       alert("등록되지 않은 회원입니다.");
    //     }
    //   }


     

    return (
    <div
    className="login_background">
        <div className = "login_wrapper">
            <div className="sign_header">
                <img src="./img/wanted.png" alt=""></img>
                <button onClick={closeModal}
                className="sign_close_btn"> x </button>

            </div>
            <div className="sign_h">
                <h1>직장인을 위한
                    <br/>커리어 플랫폼, 원티드!
                </h1>
                <h2>커리어 성장과 행복을 위한 여정
                    <br/> 지금 원티드에서 시작하세요.
                </h2>
            </div>
            
            <div className="form">  
                <span>이메일</span>
                <input className = "login_email" type="text" name="id" placeholder="이메일" value={email}
              onChange={handleEmail} />
                <div className="errorMessageWrap">
                {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
                )}
          </div>
                <button onClick={showSignUp} disabled={notAllow} className = "login_btn" type="button">이메일로 계속하기</button>
              
            </div> 

            <p className="sign_or">또는</p>
            <div className="sign_social">
                <div className="sign_social_btn">
                    <img src="../img/kakaoLogo.png" alt=""/>
                    <p>kakaotalk</p>
                </div>
                <button className="sign_social_btn">
                    <img src="../img/facebook.svg" alt=""/>
                    <p>facebook</p>
                </button>
                <button className="sign_social_btn">
                    <img src="../img/instagram.svg" alt=""/>
                    <p>instagram</p>
                </button>

                <button className="sign_social_btn">
                    <img src="../img/apple.svg" alt=""/>
                    <p>apple</p>
                </button>
            </div>
            <a className="login_bottom" href="">비밀번호를 잊으셨나요?</a>
            <hr className="divider"/>
        </div>
        </div>
    );
}

export default SignModal;