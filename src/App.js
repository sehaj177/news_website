import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,

}
  from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mode: 'light' }

  }

  toggleMode = () => {
    console.log('changing mode');
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' })
      document.body.style.backgroundColor = '#121212';
    } else {
      this.setState({ mode: 'light' })
      document.body.style.backgroundColor = 'white';

    }
  }
  pageSize = 12;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {

    return (
      <div>
        <Router>
          <Navbar onToggle={this.toggleMode} mode={this.state.mode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress} 
          />
          <Routes>

            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            +++++++++
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} onToggle={this.toggleMode} mode={this.state.mode} key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />

          </Routes>
        </Router>

      </div>

    )
  }



}

