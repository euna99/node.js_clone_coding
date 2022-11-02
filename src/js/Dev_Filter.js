import '../css/page2.css';
// import {useState} from 'react';

function DevFilter(){
  // const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  // const [ScrollActive, setScrollActive] = useState(false);
  // function handleScroll() {
  //   if (ScrollY > 299) {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(false);
  //   }
  // }
  // useEffect(() => {
  //   function scrollListener() {
  //     window.addEventListener("scroll", handleScroll);
  //   } //  window 에서 스크롤을 감시 시작
  //   scrollListener(); // window 에서 스크롤을 감시
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }; //  window 에서 스크롤을 감시를 종료
  // });
    return(

        <section
        className="dev_fliter">
        <div className="dev_fliter_one">
          <div className="dev_fliter_one_left">
            <button>
              <span>지역</span>
              <span>한국</span>
            </button>
            <button>
              <span>지역</span>
              <span>한국</span>
            </button>
            <button>
              <span>지역</span>
              <span>한국</span>
            </button>
          </div>
          <div className="dev_fliter_one_right">
            <button>응답률</button>
          </div>
        </div>
        <hr className="divider"/>

        <div className="tag">
          <button style={{background: "rgb(242, 251, 245)"}}>
            연봉이 최고의 복지
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              alt="연봉이 최고의 복지"
            />
          </button>
          <button style={{background: "rgb(243, 249, 254)"}}>
            재택근무
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" alt="재택근무" />
          </button>
          <button style={{background: "rgb(242, 251, 245)"}}>
            연봉이 최고의 복지
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              alt="연봉이 최고의 복지"
            />
          </button>
          <button style={{background: "rgb(243, 249, 254)"}}>
            재택근무
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" alt="재택근무" />
          </button>
          <button style={{background: "rgb(242, 251, 245)"}}>
            연봉이 최고의 복지
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              alt="연봉이 최고의 복지"
            />
          </button>
          <button style={{background: "rgb(243, 249, 254)"}}>
            재택근무
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75" alt="재택근무" />
          </button>
        </div>
      </section>
    );
}

export default DevFilter;