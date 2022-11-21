import '../css/reset.css';
import '../css/Header.css';
import { BiSearch } from 'react-icons/bi';
import SignModal from './sign_Modal';
import SearchBar from './SearchBar';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import {BsFileEarmarkPersonFill} from 'react-icons/bs';

function Header(){
        // 모달창 노출 여부 state
        const [modalOpen, setModalOpen] = useState(1);
        // 모달창 노출
        const showModal = () => {
            setModalOpen(2);
        }
        const closeModal=() => {
            setModalOpen(1);
        }
        
        const showSignUp=(email,password)=>{
            setModalOpen(3);
            sessionStorage.setItem("loginId", email);
            setSavedLoginId(sessionStorage.getItem("loginId"));
            sessionStorage.setItem("password",password);
            setSavedPw(sessionStorage.getItem("password"));
        }

//serchBar 시작
        const[searchBarOpen,setSearchBar]=useState(false);
        const showSearchBar = () => {

            setSearchBar(true);
    
        }
        const closeSearchBar=() => {
            setSearchBar(false);
        }
// localStorage

let [loginId, setLoginId] = useState("");
let [savedLoginId, setSavedLoginId] = useState("");
let[password,setPw]=useState("");
let[savedPw,setSavedPw]=useState("");
let sessionStorage=window.sessionStorage;


const logedIn=(email,password)=>{
    sessionStorage.setItem("loginId", email);
    setSavedLoginId(sessionStorage.getItem("loginId"));
    sessionStorage.setItem("password",password);
    setSavedPw(sessionStorage.getItem("password"));
 if(email&&password){
    console.log("로그인 성공")
 }
 else{
    console.log("로그인 실패")
 }
}


// const [get,setLogedIn]=useState(false)
// const haveLogedin =(email,password)=>{
//     if(email&&password){
//         setLogedIn(true);
//     }
//     else{
//         setLogedIn(false);
//     }
// }


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
                    <Link to="/develop">
                        <li className ="imgbar_li" >개발</li>
                    </Link>

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
            <button 
            onClick={showSearchBar}
            id="serch">
            <BiSearch/> </button>
            {searchBarOpen===true ?<SearchBar searchBarOpen={searchBarOpen} closeSearchBar={closeSearchBar}/>:("")}
            

            <button onClick={showModal}
            id="sign">회원가입/로그인</button>
            {modalOpen===2&&<SignModal showModal={showModal} closeModal={closeModal} showSignUp={showSignUp} setLoginId={setLoginId} loginId={loginId}/>}
            {modalOpen===3&&<SignUp closeModal={closeModal} showSignUp={showSignUp} setPw={setPw} password={password} logedIn={logedIn}  />} 
            
            {/* {get===true&&<BsFileEarmarkPersonFill haveLogedin={haveLogedin}/>} */}

            <button id="service">기업서비스</button>
        </div>
    </div> 
</div>
    );
}

export default Header;