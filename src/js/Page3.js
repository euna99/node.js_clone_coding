import { useState } from 'react';
import '../css/page3.css'
import '../css/reset.css'

function Page3()
{
 return(
    <div>
    <div className="page3_whole">
    <div className="page3_grid">
        <div className="page3_grid_left">
            <img className="page3_img"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16110%2Fceys4pveepwbnxol__1080_790.jpg&w=1000&q=75" alt="" />
            <h2 className="page3_grid_left_h2">웹퍼블리셔</h2>
            <span>＜서비스 소개＞
                <br/><br/>✓ Medmap – 메디컬 지도를 펼치세요!
                <br/>메드맵은 의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.<br/><br/>
                【블루비커는】<br/>
                블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고 있는 스타트업입니다.
                <br/>환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션 솔루션을 발전시켜 나가고 있습니다.
                <br/>Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할 수 있도록 도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수 있습니다.
                <br/>블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의 능력을 발휘하며 함께하고 있습니다. 원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수 있습니다.
                <br/><br/>블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고 있습니다. 다양한 최신 기술을 시도하고 접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일 준비가 되어있습니다. 많은 지원 부탁드립니다.
                <br/><br/>【빠르게 성장하고 있습니다】
                <br/>• 보건산업진흥원 혁신창업 멤버 선정 - 2019
                <br/>• 디캠프 - 디데이 출전 - 2019
                <br/>• 정주영 창업 경진 대회 우수상 - 2020
                <br/>• 마이크로소프트 스타트업 프로그램 선발 -2020
                <br/>• 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020
                <br/>• 청년창업사관학교 선발 서울 - 2021
                <br/>• TIPS 프로그램 선정 - 2021
                <br/>• 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022
                <br/>• 리벤처스 Pre-A 투자유치 - 2022
                <br/><br/>
                【언론에서 소개된 블루비커】
                <br/>• 블루비커, '세계보건의 날' 맞아 메디컬 일러스트 플랫폼 공식 론칭(2020.04.16)
                <br/>
                <br/><br/>✓ Medmap – 메디컬 지도를 펼치세요!
                <br/>메드맵은 의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.<br/><br/>
                【블루비커는】<br/>
                블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고 있는 스타트업입니다.
                <br/>환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션 솔루션을 발전시켜 나가고 있습니다.
                <br/>Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할 수 있도록 도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수 있습니다.
                <br/>블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의 능력을 발휘하며 함께하고 있습니다. 원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수 있습니다.
                <br/><br/>블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고 있습니다. 다양한 최신 기술을 시도하고 접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일 준비가 되어있습니다. 많은 지원 부탁드립니다.
                <br/><br/>【빠르게 성장하고 있습니다】
                <br/>• 보건산업진흥원 혁신창업 멤버 선정 - 2019
                <br/>• 디캠프 - 디데이 출전 - 2019
                <br/>• 정주영 창업 경진 대회 우수상 - 2020
                <br/>• 마이크로소프트 스타트업 프로그램 선발 -2020
                <br/>• 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020
                <br/>• 청년창업사관학교 선발 서울 - 2021
                <br/>• TIPS 프로그램 선정 - 2021
                <br/>• 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022
                <br/>• 리벤처스 Pre-A 투자유치 - 2022
                <br/><br/>
                【언론에서 소개된 블루비커】
                <br/>• 블루비커, '세계보건의 날' 맞아 메디컬 일러스트 플랫폼 공식 론칭(2020.04.16)
                <br/>
                <br/><br/>✓ Medmap – 메디컬 지도를 펼치세요!
                <br/>메드맵은 의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.<br/><br/>
                【블루비커는】<br/>
                블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고 있는 스타트업입니다.
                <br/>환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션 솔루션을 발전시켜 나가고 있습니다.
                <br/>Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할 수 있도록 도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수 있습니다.
                <br/>블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의 능력을 발휘하며 함께하고 있습니다. 원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수 있습니다.
                <br/><br/>블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고 있습니다. 다양한 최신 기술을 시도하고 접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일 준비가 되어있습니다. 많은 지원 부탁드립니다.
                <br/><br/>【빠르게 성장하고 있습니다】
                <br/>• 보건산업진흥원 혁신창업 멤버 선정 - 2019
                <br/>• 디캠프 - 디데이 출전 - 2019
                <br/>• 정주영 창업 경진 대회 우수상 - 2020
                <br/>• 마이크로소프트 스타트업 프로그램 선발 -2020
                <br/>• 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020
                <br/>• 청년창업사관학교 선발 서울 - 2021
                <br/>• TIPS 프로그램 선정 - 2021
                <br/>• 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022
                <br/>• 리벤처스 Pre-A 투자유치 - 2022
                <br/><br/>
                【언론에서 소개된 블루비커】
                <br/>• 블루비커, '세계보건의 날' 맞아 메디컬 일러스트 플랫폼 공식 론칭(2020.04.16)
                <br/>
            </span>
        </div>
        <div className="page3_grid_right">
            <div className="page3_box">
                <div className="reward">
                    <h3>채용보상금</h3>
                    <ul>
                        <li><h4>추천인</h4><p>500,000원</p></li>
                        <li><h4>지원자</h4><p>500,000원</p></li>
                    </ul>
                </div>
                <button className="page3_box_bookmark_btn">
                    <span>북마크하기</span>
                </button>
                <button className="page3_box_apply_btn">
                    <span>지원하기</span>
                </button>
            </div>
        </div>
    </div>
</div>

<div className="page3_position_find">
    <h2>이 포지션을 찾고 계셨나요?</h2>
    <ul>
        <li>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1053%2F1i5oxr3ognd3uxgw__1080_790.jpg&w=1000&q=75" alt=""/>
        </li>
        <li>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1053%2F1i5oxr3ognd3uxgw__1080_790.jpg&w=1000&q=75" alt=""/>
        </li>
        <li>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1053%2F1i5oxr3ognd3uxgw__1080_790.jpg&w=1000&q=75" alt=""/>
        </li>
        <li>
            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1053%2F1i5oxr3ognd3uxgw__1080_790.jpg&w=1000&q=75" alt=""/>
        </li>
    </ul>
</div>
</div>
 );

}

export default Page3;