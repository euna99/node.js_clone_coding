import {BsFileEarmarkPersonFill} from 'react-icons/bs';
import '../css/Header_right.css';
import '../css/reset.css'

function Hearder_right({logedOUt}){
    return(
        <div>
        <BsFileEarmarkPersonFill/>
        <div className="login_hover">
          <button onClick={logedOUt}>
            ๋ก๊ทธ์์
          </button>
        </div>
        </div>
    )
}

export default Hearder_right;