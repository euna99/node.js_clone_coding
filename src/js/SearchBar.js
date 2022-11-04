import "../css/reset.css";
import "../css/SearchBar.css";

function SearchBar({searchBarOpen,closeSearchBar}) {
 <div className="SearchBar_Background">
  <div className="SearchBar_Wrapper">
   <form>
    <input
     type="search"
     placeholder="#태그, 회사, 포지션 검색"
     autocomplete="off"
     value=""
    ></input>
   </form>
   <button onClick={closeSearchBar}> x </button>
                {searchBarOpen?true:""}
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
 </div>;
}
export default SearchBar;
