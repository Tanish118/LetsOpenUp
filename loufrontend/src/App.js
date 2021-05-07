import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route
}from 'react-router-dom'
import './App.css';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
