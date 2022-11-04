import "../css/reset.css";
import "../css/SearchBar.css";

function SearchBar({closeSearchBar}) {
  return(
 <div className="SearchBar_Background">
  <div className="SearchBar_Wrapper">

    <input
     type="search"
     placeholder="#태그, 회사, 포지션 검색"
     autocomplete="off"
     value=""
    ></input>
   <button onClick={closeSearchBar}> x </button>

   <div>
    <span>추천 태그로 검색해보세요</span>
    <span>기업태그 홈 이동하기</span>
   </div>
   <div className="SearchBar_Tag">
    <button></button>
    <button></button>
    <button></button>
   </div>
  </div>
 </div>
 );
}
export default SearchBar;
