import './App.css';

//react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//hooks
import { useAuth } from "./hooks/useAuth";


function App() {

  const { auth, loading } = useAuth();

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={ auth ? <Home /> : <Navigate to= "/" />} />
            <Route path='/login' element={ !auth ? <Login /> : <Navigate to= "/" />} />
            <Route path='/register' element={ !auth ? <Register /> : <Navigate to= "/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
