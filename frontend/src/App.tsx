import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Invoices from './pages/dashboard/invoice';
import Dashboard from './pages/dashboard';
import DashboardLayout from './components/layouts/DashboardLayout';

function App() {

  const AppRoutes = () =>{
    return(
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard/>}/>
            <Route path="invoice" element={<Invoices />} />
            <Route path="*" element={<Navigate to="/invoice" />} />
          </Route>
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
