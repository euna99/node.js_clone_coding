import '../css/reset.css';
import '../css/page2.css';
import DevDummy from '../json/Dev_wrap.json'
import {Link} from 'react-router-dom';

function DevWrap(){
    return(
        <div className="dev_wrap">
        <ul>
          <li>
            <div className="dev_wrap_top">
              <Link to="/page3">
                <img className="dev_wrap_img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23336%2Ft28za5k3wbbm52oc__400_400.jpeg&w=400&q=75" alt=""/>
              </Link>
            </div>
             <div className="dev_wrap_bottom">
             <h3>Linux Engineer</h3>
              플라잎<br/>
              응답률 매우 높음<br/>
              경기.한국<br/>
              채용보상금 1,000,000원
             </div>
          </li>
          {DevDummy.dev.map((dev) => (
                    <li key={dev.id}>
                        <div className="dev_wrap_top">
                            <img className="dev_wrap_img"
                            src={dev.imgUrl} alt={dev.alt}/>
                        </div>
                        <div className="dev_wrap_bottom">
                        <h3>{dev.imgTit}</h3>
                         {dev.imgPot}<br/>
                         {dev.money}
                        </div>       
                    </li>
                ))};
         
        </ul>
    </div>
    );

}

export default DevWrap;