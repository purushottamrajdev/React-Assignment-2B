import React,{Component} from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char.js';
import './App.css';

class App extends Component{
  state={
    Input: [{inputText:'',inputLength:0}]
  }
  updateInputHandler=(event)=>{
     this.setState({
      Input: [{inputText: event.target.value,inputLength: event.target.value.length}] 
     })
  }
 deleteCharHandler=(index)=>{
   //console.log('index'+index);
  let Input=[...this.state.Input[0].inputText];
  Input.splice(index,1);
  Input=Input.join('');
  console.log(Input)
  const InputText=[this.state.Input];
  InputText[0].inputText=Input;
  InputText[0].inputLength=Input.length;
  document.getElementById('input').value=Input;
  this.setState({Input: InputText}); 
 }


  render(){
    //this.state.Input.map((input)=>console.log(input.inputText.charAt(input.inputText.length-1)));
   // console.log(this.state.Input.inputText.charAt(5));
   let char=null;
 char=(
  <div>
     {this.state.Input[0].inputText.split('').map((item,index)=> { 
       for (var i=0; i<this.state.Input[0].inputText.length; i++){
        return <Char CharValue={item.charAt(i)} click={()=>this.deleteCharHandler(index)} />
     }
 
      })}
 
 </div>
 );


  return (
    <div className="App">
      <h1>Assignment2b</h1>
      <input type="text" id="input" onChange={(event)=>this.updateInputHandler(event)}/>
      <p>Input Lenght:{this.state.Input[0].inputLength}</p>
      <Validation InputLength={this.state.Input[0].inputLength}/>
      {char}
    </div>
  );
}
}

export default App;
