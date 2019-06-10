import { create } from "domain";

/*import React from 'react'; 
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';

class Grade extends App {
  constructor(props) {
     super(props);
     this.state = {
       result: 0,
       num1: 0,
       num2: 0
     };
 
     this.handlenum1Change = this.handlenum1Change.bind(this);
     this.handlenum2Change = this.handlenum2Change.bind(this);
   }

   handlenum1Change (evt) {
     this.setState({ num1: evt.target.value });
   }

 handlenum2Change(evt) {
 
     this.setState({ num2: evt.target.value });
 
 
 }
 
 
    addAction (event) {
 
   var num1=this.setState({ num1: event.target.value });
   var num2=this.setState({ num2: event.target.value });

    this.setState({result: num1 + num2 })

function () { 
  return (
 <div className="App">
    <form>
        <label>
          Name:
          <input type="number" onChange={this.handlenum1Change} />
          <input type="number" ref="term" placeholder="Length of loan"  onChange={this.handlenum2Change}/>


            <input type="button" onClick={this.addAction} value="Add"/>
            <input type='text' value={this.state.result} readonly/>

        </label>

    </form>
    
  </div>
    
  );
}


export default Grade;*/
//***********************************************///2nd *******************************************************

import React from 'react';
import ReactDOM from 'react-dom';

class Grade extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: 0,
      num2: 0
    };
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change (evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num2: Number(evt.target.value) });
  }
  addAction =(event)=> {
    let x = this.state.num1 + this.state.num2
    this.setState({result: x })
  }
render() {
 return (
    <form>
        <label>
       
        Num1:  <input type="number" onChange={this.handlenum1Change} /><br/><br/>
        Num2:  <input type="number"   onChange={this.handlenum2Change}/><br/><br/>
                <input type="button" onClick={this.addAction} value="Add"/><br/><br/>
        Answer: <input type='text' value={this.state.result} readOnly/><br/><br/>
        </label>
      </form>
    );
  }
}




export default Grade;



// import React from 'react';
// import ReactDOM from react-dom;

// class Numbers extends React.Component{
  
//     $num1 = 13;
//     $num2 = 2;
//   function apple($num1,$num2) {
    
//   }

//   render(){
//     return(
//       <p>Hello World</p>
//     );
//   }
// }

// export default Numbers;