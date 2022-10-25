// let sign=document.querySelector("#sign")
let sign_close_btn=document.querySelector(".sign_close_btn")
let sign_background=document.querySelector(".sign_background")
sign.addEventListener("click",function(event){
    sign_background.style.display="block"
})
sign_close_btn.addEventListener("click",function(event){
    sign_background.style.display="none"
})

// let banner = {
//     rollId: null,
//     interval: 2000,

//     //롤링 배너 초기화
//     rollInit: function (newinterval) {
//         if(parseInt(newinterval) > 0){
//             this.interval = newinterval;
//         }
//         //현재 배너
//         let firstitem = document.querySelector('.imgbar li');
//         if(firstitem){
//             firstitem.classList.add('currentroll');
//         }
//         //다음 배너
//         let seconditem = document.querySelectorAll('.imgbar li')[1];
//         if(seconditem){
//             seconditem.classList.add('nextroll');
//         }
//         //이전 배너
//         document.querySelector('.imgbar li:last-child').classList.add('prevroll');
//         this.rollId = setInterval(this.rollNext, this.interval);//롤링 인터벌 호출
//     },
    
//     //다음 배너 롤링
//     rollNext: function () {
//         if(document.querySelector('.prevroll')){
//             document.querySelector('.prevroll').classList.remove('prevroll');
//         }
//         if(document.querySelector('.currentroll')){
//             document.querySelector('.currentroll').classList.add('prevroll');
//             document.querySelector('.currentroll').classList.remove('currentroll');
//         }
//         if(document.querySelector('.nextroll')){
//             document.querySelector('.nextroll').classList.add('currentroll');
//             document.querySelector('.nextroll').classList.remove('nextroll');
//         }
//     //다음 이미지 있으면 다음 롤링 이미지로 선택, 없으면 첫번째 이미지를 롤링 이미지로 지정
//         if(document.querySelector('.currentroll').nextElementSibling){
//             document.querySelector('.currentroll').nextElementSibling.classList.add('nextroll');
//         }else{
//             document.querySelector('.imgbar li').classList.add('nextroll');
//         }
//     }
// }
// document.addEventListener('DOMContentLoaded', function(){
//     banner.rollInit(4000); // 배너 롤링
// });