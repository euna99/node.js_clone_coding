import { useState } from 'react';
import '../css/Sign.css';

function SignModal({ modalOpen ,closeModal }) {
    // const[closebtn,setModalOpen]=useState(true);
    
    
    return (
    <div>
        <div className = "login_wrapper">
            <div className="sign_header">
                <img src="./img/wanted.png" alt=""></img>
                <button onClick={closeModal}
                className="sign_close_btn"> x </button>
                {modalOpen?true:""}
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
                <input className = "login_email" type="text" name="id" placeholder="이메일"/>
                <button className = "login_btn" type="button">이메일로 계속하기</button>
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
        </div>
        </div>

    );
}

export default SignModal;