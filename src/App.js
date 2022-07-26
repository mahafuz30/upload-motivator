import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDescForm from './pages/ProductDescForm';
import Home from './pages/Home';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  exact path="/addProduct" element={<ProductDescForm/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
