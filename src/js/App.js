import Header from "../js/Header";
import Footer from "../js/Footer";
// import Router from "./Router";
import Main from "./Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import DevPage from "./Dev_page";
import Page3 from "./Page3";



function App() {
    // sessionStorage사용하기 
    // let [loginId, setLoginId] = useState("");
    // let [savedLoginId, setSavedLoginId] = useState("");

    // let sessionStorage = window.sessionStorage;


    //   const onClickConfirmButton = () => {
    //     if(email ===User.email) {
    //       alert('비밀번호를 입력하세요')
    //       setModal(2);
    //     } else {
    //       alert("등록되지 않은 회원입니다.");
    //     }
    //   }

    // console.log(loginId);
return (
 <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Main />}  />
            <Route path="/develop" element={<DevPage />} />
            <Route path="/page3" element={<Page3/> } />
        </Routes>
    <Footer/>
</BrowserRouter> 
 );
}


export default App;
