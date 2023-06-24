import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PlanPage from './Pages/PlanPage';




function App() {
  return (
    <Router>
      <div>

        <Routes>
            <Route path="/" Component={HomePage}/>

            <Route path="/login" Component={LoginPage}/>

            <Route path="/register" Component={RegisterPage}/>

            <Route path ='/plans' Component={PlanPage} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
