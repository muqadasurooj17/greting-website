import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate= new Date();
currDate=currDate.getHours();
let greetings='';
const gretcolor ={ };


  if(currDate >=1 && currDate<12){
greetings="Good morning";
gretcolor.color= 'green';
  }
  else if(
    currDate>=12 && currDate<19){
      greetings="Good After noon";
      gretcolor.color= 'Red';
    }
  else {
    greetings="Good Night";
    gretcolor.color= 'Orange';
  }

ReactDOM.render(
  <h1>hello sir , <span style={gretcolor}> {greetings}</span></h1>,
  document.getElementById('root')
);

