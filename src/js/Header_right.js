import {BsFileEarmarkPersonFill} from 'react-icons/bs';
import '../css/Header_right.css';
import '../css/reset.css'

function Hearder_right({logedOUt}){
    return(
        <div>
       <BsFileEarmarkPersonFill/>
       <div className="login_hover">
        <button onClick={logedOUt}>
          로그아웃
        </button>
       </div>
       </div>
    )
}

export default Hearder_right;