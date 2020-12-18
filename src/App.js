import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
