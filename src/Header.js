import './Header.css';
import './reset.css';
function Header(){

   return(

    <div className="header">
    <div className="navbar">
        <div className="left">
            
            <button id="hamberger">
                
            </button>
                
            <a href="./">
                wanted
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
        
            </button>
            <button id="sign">회원가입/로그인</button>
            
            <button id="service">기업서비스</button>
        </div>
    </div> 
</div>



   );
 }

 export default Header;