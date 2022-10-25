import '../css/reset.css';
import '../css/Header.css';
// import './sign_Modal'
import { BiSearch } from 'react-icons/bi';
function Header(){
return(
    <div className="header">
    <div className="navbar">
        <div className="left">  
        <div className="left_hover">
            <button id="hamberger">
                <img className="hamberger_img" alt="hover_menu" src="img/hamberger.webp" />
            </button>
            <div id="hamber_hover">
                <ul>
                    <li className="imgbar_li">직군전체</li>
                    <li className="imgbar_li"></li>
                    <li className="imgbar_li">경영</li>
                    <li className="imgbar_li">마케팅</li>
                    <li className="imgbar_li">디자인</li>
                    <li className="imgbar_li">영업</li>
                    <li className="imgbar_li">고객센터</li>
                    <li className="imgbar_li">게임제작</li>
                    <li className="imgbar_li">HR</li>
                    <li className="imgbar_li">미디어</li>
                    <li className="imgbar_li">엔지니어링.설계</li>
                    <li className="imgbar_li">금융</li>
                    <li className="imgbar_li">제조.생산</li>
                    <li className="imgbar_li">의료.제약.바이오</li>
                    <li className="imgbar_li">교육</li>
                    <li className="imgbar_li">법률</li>
                    <li className="imgbar_li">공공복지</li>
                </ul>
            </div>
        </div>
            <a href="./">
                <img className="Wanted_logo_left" alt="wanted" src="img/wanted.png"></img>
            </a>
        </div>     


        <ul className="center">
            <li className="imgbar_li"><a href="./">채용</a></li>
            <li className="imgbar_li"><a href="./">이벤트</a></li>
            <li className="imgbar_li"><a href="./">직군별 연봉</a></li>
            <li className="imgbar_li"><a href="./">이력서</a></li>
            <li className="imgbar_li"><a href="./">커뮤니티</a></li>
            <li className="imgbar_li"><a href="./">프리랜서</a></li>
            <li className="imgbar_li"><a href="./">AI 합격예측</a></li>
        </ul>


        <div className="right">
            <button id="serch">
                <BiSearch/>
            </button>
            <button
            id="sign">회원가입/로그인</button> 
            <button id="service">기업서비스</button>
        </div>
    </div> 
</div>
   );
 }

 export default Header;