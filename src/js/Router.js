import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dev_page from "./Dev_page";
import Main from "./Main";

function Router() {
 return (
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<Main />} />
    <Route path="/develop" element={<Dev_page />} />
   </Routes>
  </BrowserRouter>
 );
}
export default Router;
