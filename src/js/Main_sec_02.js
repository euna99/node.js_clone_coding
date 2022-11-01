import '../css/main.css';
import dummySec02 from'../json/Main_sec_02_artcle.json'
function Main_sec_02(){
    return(
        <section className="sec_second">
            <div className="title_second">
                <h2>3분만에 읽는 Wanted+아티클</h2>
                아티클 전체보기
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
    );
}
export default Main_sec_02