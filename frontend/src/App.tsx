import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {

  const AppRoutes = () =>{
    return(
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </AuthProvider>
    )
  } 

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
