import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { AppContext, UseAppContext } from "./app/App";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <AppContext.Provider value={UseAppContext()}>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
          <Route path="/editproduct/:id" element={<EditProduct />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
