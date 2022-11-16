import '../css/main.css';
import dummySec01 from'../json/Main_sec_01_site.json';
function Main_Sec_01(){

 // map 함수로 li 컴포넌트 받아오기 4주차 영상 찾아보기 
    return(
        <div className="div_whole">
            <section className="img_wrap">
                <ul className="imgbar">
                    <li className="imgbar_li">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100" />
                    </li>
                    <li className="imgbar_li">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100" />
                    </li>
                    <li className="imgbar_li">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100" />
                    </li>
                    <li className="imgbar_li">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.jpg&w=1060&q=100" />
                    </li>
                </ul>
            </section>


        <section className="sec_first">
            <div className="title_first">
                <h2>나에게 필요한 커리어 인사이트
                    <button >
                        ? 
                    </button>
                </h2>
            </div>
            <div className="bar">
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>인간관계</span>
                </button>
                <button className="btnb">
                    <span>커리어고민</span>
                </button>
                <button className="btnb">
                    <span>라이프스타일</span>
                </button>
                <button className="btnb">
                    <span>AI</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button className="btnb">
                    <span>IT기술</span>
                </button>
                <button id="btna">
                <span> > </span>
                </button>
                <button id="btnd">
                    <span>...</span>
                </button> 
            </div>

            <div className="wrapper_first">
                <ul className="site">
                {dummySec01.CareerInsite.map((CareerInsite) => (
                    <li key={CareerInsite.id}>
                        <div>
                            <img src={CareerInsite.imgAdress} alt={CareerInsite.imgAlt} />
                        </div>
                        <p className="tit_p">{CareerInsite.imgTitle}</p>
                        <div className="infor_p">
                            {CareerInsite.imgInfor}
                        </div>
                    </li>
                ))};
                </ul>

                <div className="more">
                    <button className="more_btn">더 많은 콘텐츠 보기</button>
                </div>     
            </div>
        </section>
        </div>
    );}   

export default Main_Sec_01