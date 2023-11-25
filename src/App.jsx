import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <ToastContainer></ToastContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
