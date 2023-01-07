import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Login } from './Components/Login';
import ProductDetails from './Components/ProductDetails';
import ProductListing from './Components/ProductListing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes><Route path="/" element={<ProductListing/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
        </Routes>
</div>
  );
}

export default App;
