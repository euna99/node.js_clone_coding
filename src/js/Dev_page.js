import DevFilter from "./Dev_Filter";
import DevTitle from "./Dev_title";
import DevBookMark from "./DevBookMark";
import DevWrap from "./Dev_wrap";
import { useState,} from "react";

function Dev_Page() {
//  window.addEventListener("scroll", () => {
//   let top = document.documentElement.scrollTop;
//   console.log(top);
//  });
//  const [DevStatus, setDevFix] = useState(false);
//  const devFix = () => {
//   if (scrollY > 200) {
//    setDevFix(true);
//    StyleSheet.postion="fixed"
//   } else {
//    setDevFix(false);
//   }
//  };

 return (
  <div>
    <DevTitle/>
   <DevFilter />
   <DevBookMark />
   <DevWrap />
  </div>
 );
}

export default Dev_Page;
