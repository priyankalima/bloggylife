import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch} from 'react-router-dom';
import Blogger from './components/Blogger';
import Profile from './components/Profile';


function App() {
  return (
    <>
    
    <Switch>
      <Route exact path='/' component={Blogger}/>
      <Route exact path='/blogger' component={Blogger}/>
      <Route path="/profile" component={Profile}/>
    </Switch>   
    
    
    </>
  );
}

export default App;
