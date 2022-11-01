import '../css/page2.css';
// import {useState} from 'react';

function DevFilter(){
//   let dev_fliter=document.querySelector(".dev_fliter")
//   let dev_article=document.querySelector(".dev_article")
//   window.addEventListener('scroll', () => { 
//     let top=document.documentElement.scrollTop
//     console.log(top)
//     if (top>300){
//         dev_fliter.style.position="fixed"
//         dev_article.style.display="none"

//     }
//     // console.log(window.scrollX, window.scrollY);
//     else{
//         dev_fliter.style.position="unset"
//         dev_article.style.display="block"
//     }
// });
    return(
        <div className="dev_whole">
        <div className="dev_article">
        <div className="dev_nav">
          <button className="JobGroup_JobGroup__H1m1m">
            <p className="JobGroup_JobGroup__title__nZmec">개발</p>
          </button>
          <button className="more_btn">
            <img src="../img/free-icon-down-arrow-3833020.png" alt="" style={{height: '26px', width: '26px'}} />
          </button>

          <button className="dev_whole_btn">
            <p>개발전체</p>
          </button>
          <button className="more_btn">
            <img src="../img/free-icon-down-arrow-3833020.png" alt="" style={{height: '26px', width: '26px'}} />
          </button>
        </div>
      </div>
        <section className="dev_fliter">
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
      </div>
    );
}

export default DevFilter;