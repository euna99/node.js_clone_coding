
import "../css/reset.css";
import "../css/SearchBar.css";

function SearchBar({closeSearchBar}) {
  // const [searchTerm, setSearchTerm] = useState("");
  // console.log(setSearchTerm)
  return(
 <div className="SearchBar_Background">
  <div className="SearchBar_Wrapper">
    <div className="SearchBar_input_div">
    <input className="SearchBar_input"
     type="search"
     placeholder="#태그, 회사, 포지션 검색"
    //  onChange={(e) => {
    //   setSearchTerm(e.target.value);
    // }}
    //  autocomplete="off"
    ></input>
    </div>
    {/* <button onClick={closeSearchBar}> 닫기 버튼
    </button> */}
   <div className="SearchBar_middle">
    <div><span>추천 태그로 검색해보세요</span></div>
    <div><span>기업태그 홈 이동하기</span></div>
   </div>
   <div className="SearchBar_Tag">
    <button className="Search_Tag_Btn1">#기숙사</button>
    <button className="Search_Tag_Btn2">#연봉 2%~5%</button>
    <button className="Search_Tag_Btn3">#퇴사율 5% 미만</button>
    <button className="Search_Tag_Btn4">#퇴사율 5% 미만</button>
    <button className="Search_Tag_Btn5">#퇴사율 5% 미만</button>
   </div>
  </div>
  <div onClick={closeSearchBar}
  className="Search_close_Sec">
  </div>
 </div>

 
 );
}
export default SearchBar;
