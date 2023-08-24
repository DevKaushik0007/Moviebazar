// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header  from './components/common/header';
import LoginPage from "./components/loginPage";
import HomePage from './components/homepage';
import Main from './components/common/main';
import Footer from './components/common/footer';
import SignInSide from './components/loginPage';
import Home from './components/cardhome';
// import axios from "axios";



function App () {
  return (
    <BrowserRouter>
    <Header/>
    <Main/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' elements={<SignInSide/>}></Route>
    </Routes> 
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
