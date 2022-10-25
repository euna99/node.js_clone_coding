import '../css/footer.css';

function Footer(){

    return(
        <footer>
        <div className="footer_row">
            <div className="footer_a">
                <div className="footer_a_left">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"/>
                    <div className="footer_a_left"> 
                    기업소개
                    이용약관
                    개인정보 처리방침
                    고객센터
                    </div>
                </div>
                <div className="SocialLinks"> 
                    {/* <a href="https://www.instagram.com/wantedjobs.kr/" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram"/> 
                    {/*  */}
                    {/* <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube"/>
                    {/*  */}
                    {/* <a href="https://www.facebook.com/wantedkr" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook"/>
                        {/*  */}
                    {/* <a href="https://blog.naver.com/wantedlab" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog"/>
                    {/*  */}
                    {/* <a href="https://pf.kakao.com/_XqCIxl" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao"/>
                    {/*  */}
                    {/* <a href="https://post.naver.com/my.nhn?memberNo=18284175" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post"/>
                    {/*  */}
                    {/* <a href="https://apps.apple.com/kr/app/id1074569961" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple"/>
                    {/*  */}
                    {/* <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted" className="" aria-label="" target="_blank" rel="noopener noreferrer"> */}
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google"/>
                    {/*  */}
                </div>
            </div>
        </div>
        <div className="footer_row_two">
            <p className="Footer_footerText__CTqnd">
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                <br/>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
                <br/>© Wantedlab, Inc.
            </p>
        </div>
    </footer>
    );
}

export default Footer;