import DevFilter from "./Dev_Filter";
import DevTitle from "./Dev_title";
import DevBookMark from "./DevBookMark";
import DevWrap from "./Dev_wrap";
import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,un} from "../modules/counter";

function Dev_Page() {
  //여기가 리덕스 쓰는 페이지 넣는 부분 
  const number=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  // const ary=[];
  // const markedAry=[];
  const onADD=(id)=>{
    dispatch(add(id));
    alert("북마크");
  };
  const onUN=(e)=>{
    dispatch(un(e));
  };

const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
const [DevStatus, setDevStatus] = useState(false);
function handleScroll() {
  if (ScrollY >300) {
    setScrollY(window.pageYOffset);
    setDevStatus(true);
  } else {


    setScrollY(window.pageYOffset);
    setDevStatus(false);
  }
}
// console.log(ScrollY)
useEffect(() => {
  function scrollListener() {
    window.addEventListener("scroll", handleScroll);
  } //  window 에서 스크롤을 감시 시작
  scrollListener(); // window 에서 스크롤을 감시
  return () => {
    window.removeEventListener("scroll", handleScroll);
  }; //  window 에서 스크롤을 감시를 종료
});

// const BookMarkAll=()=>{
//   console.log(number)
// }
console.log (number);

return (
<>
  <DevTitle  DevStatus={DevStatus}/>
  <DevFilter DevStatus={DevStatus}/>
  <DevBookMark />
  <DevWrap number={number} onADD={onADD} onUN={onUN}/>
</>
);
}

export default Dev_Page;
