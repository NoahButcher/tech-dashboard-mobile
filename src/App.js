import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import Links from "./components/Links"

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      output: <Links />
    }
    this.HomeSelect=this.HomeSelect.bind(this)
    this.LinksSelect=this.LinksSelect.bind(this)
  }

  HomeSelect(){
    console.log("Home button clicked!")
    this.setState({output:<Home />})
    this.setState({homeBgColor:"#1b1b1bb2"})
    this.setState({linksBgColor:"#1b1b1b5b"})
  }
  LinksSelect(){
    console.log("Links button clicked!")    
    this.setState({output:<Links />})
    this.setState({linksBgColor:"#1b1b1bb2"})
    this.setState({homeBgColor:"#1b1b1b5b"})
  }
  componentDidMount(){
    this.setState({linksBgColor:"#1b1b1bb2"})
    this.setState({homeBgColor:"#1b1b1b5b"})
  }

  

  

  // componentDidMount() {
  //   const script = document.createElement("script");

  //   script.src = "https://platform.twitter.com/widgets.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }
  
  
  render() {
    
    return (
      <div className="App">        
        
        <div className="App-header">
          
          <h1 className="App-title">Technology Dashboard 2
            <br />
            <div>
              <button 
              className="home-button"
              style={{backgroundColor:this.state.homeBgColor}}
              onClick={this.HomeSelect}
              onTouchStart={this.HomeSelect}>
                Home
              </button>
              <button 
              className="links-button"
              style={{backgroundColor:this.state.linksBgColor}}
              onClick={this.LinksSelect}
              onTouchStart={this.LinksSelect}>
                Links
              </button>
            </div>
          </h1>
        </div>
        <br />
        <div className="App-body">          
          
          {this.state.output}

          <div className="App-notification">               
              <a 
              target="_blank"
              rel="noopener noreferrer"
              className="App-reg-link"
              href="https://chrome.google.com/webstore/detail/gbblpieaphdajmhondclcjmekgkibeaa">
                 Install this as a Chrome Extension here.
              </a>
            </div>
          <div className="App-version">
              v1.1.11 | 
              <a 
              target="_blank"
              rel="noopener noreferrer"
              className="App-reg-link"
              href="https://github.com/NoahButcher/tech-dashboard-mobile/blob/master/README.md">
                 View ReadMe
              </a> | 
              <a 
              target="_blank"
              rel="noopener noreferrer"
              className="App-reg-link"
              href="https://github.com/NoahButcher/tech-dashboard-mobile/blob/master/CHANGELOG.md">
                 View Changelog
              </a>
            </div>
          
        </div>
        
        
      </div>
      
      
    );
  }
}

export default App;
