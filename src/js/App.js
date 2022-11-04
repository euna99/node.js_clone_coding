import Header from "../js/Header";
import Footer from "../js/Footer";
// import Router from "./Router";
import Main from "./Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dev_page from "./Dev_page";
import Page3 from "./Page3";
import SearchBar from "./SearchBar";

function App() {
return (
<BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/develop" element={<Dev_page />} />
            <Route path="/page3" element={<Page3/> } />
        </Routes>
    <Footer/>
</BrowserRouter>
 );
}


export default App;
