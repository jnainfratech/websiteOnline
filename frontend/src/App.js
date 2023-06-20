import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';




function App() {
  return (
    <Router>
      <div>

        <Switch>
            <Route path="/" Component={HomePage}/>

            <Route path="/login" Component={LoginPage}/>

            <Route path="/register" Component={RegisterPage}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
