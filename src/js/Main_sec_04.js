import { Link } from 'react-router-dom';
import '../css/main.css';

function Main_sec_04(){

    return(
        <section className="sec_four">
        <div className="title_second">
            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            {/* <a href="https://www.wanted.co.kr/events?sort=deadline&label=article&payable=all"> */}
                 이벤트 전체보기{/*</a> */}
        </div>
        <div className="wrapper_four">
            <ul className="event">
                <li className="event_li">
                {/* <link to="https://www.wanted.co.kr/events/22_09_s17_b01"> */}
                    <img className="event_img"
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"
                    alt=""/>
                    <div className="event_div">
                        <h3 className="Item_EventItem__contents__title__EhF9F">[무료 라이브톡] 스타트업에 코칭 리더십이 꼭 필요한 이유!</h3>
                        <p className="Item_EventItem__contents__date__l7VBh"></p>
                    </div>
                {/* </link> */}
                </li>
                <li class="event_li">
                    {/* <Link href="https://www.wanted.co.kr/events/22_09_s18_b01"> */}
                    <img class="event_img"
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2439%2F2da70321.jpg&w=800&q=75"
                    alt=""/>
                    <div class="event_div">
                        <h3 class="Item_EventItem__contents__title__EhF9F">[무료 라이브톡] 스타트업에 코칭 리더십이 꼭 필요한 이유!</h3>
                        <p class="Item_EventItem__contents__date__l7VBh"></p>
                    </div>
                    {/* </Link> */}
                </li>
            </ul>
        </div>
    </section>
    );
}

export default Main_sec_04