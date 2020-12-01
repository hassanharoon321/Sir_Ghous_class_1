import React from "react";
import './App.css';

class Header extends React.Component{
  render(){
    return(
      <div className="header">
      <h2 >Header</h2>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    // const name = "Hassan";
    // const todos = [{name:"Hassan"},{name:"basit"}]
    return(
      <div>
      
        {/* <ul>
        {todos.map((item,index)=>{
          return <li key={index}>{item.name}</li>
          
      })}
      </ul> */}

        <Header/>
        <h1>Main Component</h1>
      </div>
    );
  }
}

export default App;
