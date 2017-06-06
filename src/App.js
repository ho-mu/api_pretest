import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  state={
    name:'',
    repos:[]
  }

  getRepos = () =>{
    axios.get('https://api.github.com/users/ho-mu/repos')
      .then((response)=>{
        console.log(`in then`)
        this.setState((prev)=>{
          let newState = { prev };
          
          response.data.forEach((val)=>{
            this.state.repos.push(val.full_name)
          })
          
          return newState
        })
        
      })
  }


  render() {
    
    return (
      <div className="App">
        <input type="text" placeholder='Git UserName'  value='ho-mu' />
        <button type='submit' onClick={this.getRepos} >Get Repos</button>
        <hr />
        <ul><DisplayRepos repos={this.state.repos}/></ul>
      </div>
    );
  }
}

const DisplayRepos = (props) => {
  console.log(`props: `, props)
  return(
     <li> {props.repos} </li>
  )
}

export default App;
