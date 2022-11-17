import './App.css';
import Header from './myproject/Header';
import Category from './myproject/Category';
import Product from './myproject/Product';
import Footer from './myproject/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './myproject/Home';
import Signup from './myproject/Signup';
import Login from './myproject/Login';
import AddUser from './myproject/AddUser';
import Crude from './myproject/Crude';
import EditUser from './myproject/EditUser';
import Search from './myproject/Search';

function App() {
  return (
    <div className='App'>

    <BrowserRouter>
    <Header/>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Category' element={<Category/>}/>
            <Route path='/Product' element={<Product/>} />
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/AddUser' element={<AddUser/>}/>
            <Route path='/edituser/:id' element={<AddUser/>}/>
            <Route path='/Crude' element={<Crude/>}/>
            <Route path='/Search' element={<Search/>}/>
            
            
       </Routes>
        <Category/> 
    <Product/>
      <Footer/>
      
    </BrowserRouter>
    </div>
   
  
  );
}

export default App;
