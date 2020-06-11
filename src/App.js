import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state={
    name:'',
    email:'',
    phone:''

  }
  changeHandler=(e)=>{
    const key=e.target.name;
    const val=e.target.value;
    this.setState({[key]:val})
  }
  changeSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }

  render(){
    return (
      <div className="App">
        <h1>Contact Form </h1>
        <form onSubmit={this.changeSubmit}>
          <label>
           first  Name:<input type="text" name="name" value={this.state.name}  onChange={(e)=>this.changeHandler(e)}/>
          </label><br/><br/>
          <label>
           last Name:<input type="text" name="name" value={this.state.name}  onChange={(e)=>this.changeHandler(e)}/>
          </label><br/><br/>
          <label>
            Email Id<input type="text" name="email" value={this.state.email} onChange={(e)=>this.changeHandler(e)}/>
          </label><br/><br/>
          <label>
            Phone no:<input type="text" name="phone" value={this.state.phone}  onChange={(e)=>this.changeHandler(e)}/>
          </label><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
 
}

export default App;
