import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './utils/Root';
import Login from './pages/Login';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Categories from './components/Categories';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Root/>
        }/>

        <Route path="/admin-dashboard" 
        element={
          <ProtectedRoutes requireRole={["admin"]}>
              <Dashboard />
          </ProtectedRoutes>
        }>
          <Route 
            index
            element={
              <h1>summary of dashboard</h1>
            }
          />
          <Route 
            path='categories'
            element={
              <Categories />
            }
          />
          <Route 
            path='products'
            element={
              <h1>Products</h1>
            }
          />
          <Route 
            path='suppliers'
            element={
              <h1>Suppliers</h1>
            }
          />
          <Route 
            path='orders'
            element={
              <h1>Orders</h1>
            }
          />
          <Route 
            path='users'
            element={
              <h1>Users</h1>
            }
          />
          <Route 
            path='profile'
            element={
              <h1>Profile</h1>
            }
          />
        </Route>



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
