import React, { useEffect } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {getUserAuth} from'./actions'
import Profile from './components/Userprofile';
import { connect } from 'react-redux';
import Messenger from'./components/Messenger'
import Video from './components/Video';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route exact path='/home'>
            <Header/>
            <Home/>
          </Route>

          <Route exact path="/profile">
           <Header />
            <Profile />
            </Route> 
            
            <Route exact path="/messenger">
              <Header/>
              <Messenger/>
            </Route>

            <Route exact path="/video">
              <Header/>
              <Video/>
            </Route>
            
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps=(state)=>{
  return {      
  };
};
const mapDispatchToProps=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
});

//export default Login
export default connect(mapStateToProps,mapDispatchToProps)(App);
