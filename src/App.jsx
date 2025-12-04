import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './utils/Root';
import Login from './pages/Login';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Root/>
        }/>

        <Route path="/admin/dashboard" element={
          <ProtectedRoutes requireRole={["admin"]}>
              <h1>admin dashboard</h1>
          </ProtectedRoutes>
        }/>

        <Route path="/user/dashboard" element={
          <h1>user dashboard</h1>
        }/>

        <Route path="/login" element={
          <Login />
        }/>

        <Route path="/unautorized" element={
            <p className="font-bold text-3xl mt-20 ml-20">
              unauthorized access
            </p>
        }/>
      </Routes>
    </Router>
  )
}

export default App
