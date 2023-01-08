import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import  Login  from './Components/Login';
import ProductDetails from './Components/ProductDetails';
import{ Home} from './Components/Home';
import { PrivateRoutes } from './Routes/PrivateRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes><Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
        </Routes>
</div>
  );
}

export default App;
