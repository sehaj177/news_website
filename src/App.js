import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import { News } from './components/News';

import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  
}   
from 'react-router-dom';  

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={mode:'light'}
    
  }

  toggleMode = () => {
    console.log('changing mode');
    if (this.state.mode === 'light') {
      this.setState({mode:'dark'})
      document.body.style.backgroundColor = '#121212';
    } else {
      this.setState({mode:'light'})
      document.body.style.backgroundColor = 'white';

    }
  }
    pageSize = 12;
   
  render(){

    return(
      <div>
        <Router>
        <Navbar onToggle={this.toggleMode} mode={this.state.mode}/>
        
        
        <Routes>
          
          <Route exact path="/" element={<News onToggle={this.toggleMode} mode={this.state.mode} key="General" pageSize={this.pageSize} country="in" category="General" />}/>
          <Route exact path="/General" element={<News  onToggle={this.toggleMode} mode={this.state.mode}  key="General" pageSize={this.pageSize} country="in" category="General" />}/>
          <Route exact path="/Entertainment" element={<News  onToggle={this.toggleMode} mode={this.state.mode} key="Entertainment"  pageSize={this.pageSize} country="in" category="Entertainment" />}/>
          <Route exact path="/Business" element={<News onToggle={this.toggleMode} mode={this.state.mode}  key="Business"  pageSize={this.pageSize} country="in" category="Business" />}/>
          <Route exact path="/Health" element={<News  onToggle={this.toggleMode} mode={this.state.mode}  key="Health" pageSize={this.pageSize} country="in" category="Health" />}/>
          <Route exact path="/Science" element={<News onToggle={this.toggleMode} mode={this.state.mode}  key="Science"  pageSize={this.pageSize} country="in" category="Science" />}/>
          <Route exact path="/Sports" element={<News   onToggle={this.toggleMode} mode={this.state.mode} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}/>
          <Route exact path="/Technology" element={<News  onToggle={this.toggleMode} mode={this.state.mode} key="Technology"  pageSize={this.pageSize} country="in" category="Technology" />}/>
           
        </Routes>
        </Router>
      </div>

    )
  }



}

