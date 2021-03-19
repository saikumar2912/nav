import React, { useState } from "react";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import Skill from './Components/Skill';
import Login from './Components/Login';
import Register from './Components/Register';
import ProtectedRoute from './Components/ProtectedRouter';
import Secret from './Components/Secret';
import {BrowserRouter as Router,Switch,Route,Redirect,Link} from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    
      <Router>
        <div className="App">
    <Navbar/>
    <Switch>
    <Route path="/Home" exact component={Home}/>
    <Route path="/Skill" component={Skill}/>
    <Route path="/Post" component={Post}/>
    <Route path="/Login" component={Login}/>
    <Route path="/Register" component={Register}/>
    <Route path="/" exact>
            {isAuthenticated ? (
              <Redirect to="/secret" />
            ) : (
              <div>
                <h1>Homepage</h1>
                <Link to="/secret">Go to secret</Link>
                <br></br>
                <button onClick={login}>Log in</button>
              </div>
            )}
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/secret"
            logout={logout}
            component={Secret}
          />
          <Route path="*">
            <div>404 Not found </div>
          </Route>
    
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
