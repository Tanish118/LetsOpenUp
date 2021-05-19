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
import Profile from './components/profile';
import { connect } from 'react-redux';

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
          <Route  path='/home'>
            <Header/>
            <Home/>
          </Route>
          <Route path="/profile">
            {/* <Header /> */}
            <Profile />
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
