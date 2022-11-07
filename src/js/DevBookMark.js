import '../css/reset.css';
import '../css/DevBookMark.css';
import {BsFillBookmarkFill} from 'react-icons/bs';

function DevBookMark (){
    return(
      <div>
      <div className="bookmark">
        <div className="bookmark_tit">
          <BsFillBookmarkFill/>
          <p>북마크 모아보기</p>
        </div>
        <h3 className="fun">적극 채용중인 회사</h3>
      </div>

      <ul className="fun_div">
        <li className="a_instead">
          <header>
            <img src="../img/unnamed.png" alt="" />
          </header>
          <footer>
            <h4>화해</h4>
            <h5>11개 포지션</h5>
          </footer>
        </li>

        
        
      <li className="a_instead">
          <header>
            <img src="../img/unnamed.png" alt="" />
          </header>
          <footer>
            <h4>화해</h4>
            <h5>11개 포지션</h5>
          </footer>
        </li>
        
        <li className="a_instead">
          <header>
            <img src="../img/unnamed.png" alt="" />
          </header>
          <footer>
            <h4>화해</h4>
            <h5>11개 포지션</h5>
          </footer>
        </li>
        
        <li className="a_instead">
          <header>
            <img src="../img/unnamed.png" alt="" />
          </header>
          <footer>
            <h4>화해</h4>
            <h5>11개 포지션</h5>
          </footer>
        </li>
        
        <li className="a_instead">
          <header>
            <img src="../img/unnamed.png" alt="" />
          </header>
          <footer>
            <h4>화해</h4>
            <h5>11개 포지션</h5>
          </footer>
        </li>
        </ul>
      </div>
    
    

    );


}
export default DevBookMark;


//button onClick=()={setNumber}
//setNumber={props.setNumber} 
//provider.useSelector,useDispatch
 