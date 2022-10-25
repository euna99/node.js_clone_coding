import '../css/main.css';

function Main_reason_sec(){
    return(
        <section className="reason_sec">  
        <div className="reason">

            <div className="reason_gr1">  
                <span>
                <img className="Wanted_logo_left" alt="wanted" src="img/wanted.png"></img>
                    구독해야 하는 이유
                    <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                </span>
                <button id="reason_btn"> 첫 달 구독 0원</button>
    
            </div>

            <div className="reason_2">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90" alt=""/>
            </div>

        </div>
    </section> 

    );
}

export default Main_reason_sec