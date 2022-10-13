import NavBar from "./components/Header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from './componentes/Main/itemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './componentes/Header/CartWidget';


function App() {
    return (
        <BrowserRouter>
          <NavBar />
           <Routes>
           <Route path='/' element={<ItemListContainer />} />
             <Route path='/category/:categoryName' element={<ItemListContainer />} />
             <Route path='/item/:id' element={<ItemDetailContainer />} />
             <Route path='/cart' element={<CartWidget />} /> 
           </Routes>
        </BrowserRouter>
    );
}

export default App;
