import DevFilter from "./Dev_Filter";
import DevTitle from "./Dev_title";
import DevBookMark from "./DevBookMark";
import DevWrap from "./Dev_wrap";
import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,un} from "../modules/counter";

function Dev_Page() {
  const number=useSelector(state=>state.counter);
  const dispatch=useDispatch();
  const onADD=()=>{
    dispatch(add());
    alert("북마크");
  };
  const onUN=()=>{
    dispatch(un());
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

 return (
  <div>
    <DevTitle  DevStatus={DevStatus}/>
    <DevFilter DevStatus={DevStatus}/>
    <DevBookMark />
    <DevWrap  number={number} onADD={onADD} onUN={onUN}/>
  </div>
 );
}

export default Dev_Page;
