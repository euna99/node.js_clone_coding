import '../css/main.css';
import dummySec02 from '../json/Main_sec_02_artcle.json';

function Main_sec_03(){
    return(
        <div>
            <section className="sec_second">
            <div className="title_second">
                <h2>직장인을 위한 Wanted+ VOD</h2>
                <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all">VOD 더보기 > </a> 
            </div>
            <div className="wrapper_second">
                <ul className="article">
                {dummySec02.article.map((article) => (
                    <li key={article.id}>
                        <div>
                            <img src={article.imgAdress} alt={article.imgAlt} />
                        </div>
                        <p className="tit_p">{article.imgTitle}</p>
                        <div className="sec_article_Tag">
                            {article.imgTag}
                        </div>
                    </li>
                ))};
                  
                </ul>
                </div>
            </section>
            <div className="cont">
                <p className="cont_span">직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                    <em className="LineBanner_LineBanner__emoji__69eEU">👀</em>
                </p> 
            </div>
        </div>
            
        );}

export default Main_sec_03