import Header from "../js/Header";
import Footer from "./Footer";
// import Router from "./Router";
import Main from "./Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dev_page from "./Dev_page";

function App() {
 return (
  <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/develop" element={<Dev_page />} />
        </Routes>
    <Footer/>
</BrowserRouter>
 );
}

export default App;
