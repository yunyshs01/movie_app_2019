import React from 'react';
import logo from './logo.svg';
import './App.css';

//
class App extends React.Component{

  constructor(props){
    super(props);
    console.log("constructed");
  }

  state = {
    count: 0
  };

  componentDidMount(){
    console.log("componendDidMount");
  }

  componentDidUpdate(){
    console.log("I have updated!");
  }
  
  add = ()=>{
    console.log("added to : " + this.state.count);
    this.setState(current =>({count: current.count + 1}));
    
  };

  minus = ()=>{
    console.log("taken away to : " + this.state.count);
    this.setState(current =>({count:current.count - 1}));
  }

  render(){
    console.log("rendering");
    return (
    <div>
      <h1>Im a class :  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
