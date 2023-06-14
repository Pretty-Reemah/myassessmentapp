import React from 'react';
import './App.css';
import Useroutput from './component/Useroutput';
import { Userinput } from './component/userinput';
import { Component } from 'react';

class App extends Component() {
  //creating a state that holds wande coal
  state ={
    user:
       "wande coal"
  }
  onChangeHandler = (event)=>{
    this.setState({user: event.target.value});
  }
  render(){
  return (
    <div className ="App">
    //<p className="apptwo"></p>
   <Useroutput username={this.state.user}/>
   <Userinput/>
  
    </div>
  );
}}

export default App;
