 import React from "react";
 import { ReactDOM } from "react";
 function Card (props){ 
    
    return <div className="emojibox">
    <div className="emoji">{props.emoji}</div> <div className="text"><p>{props.description}</p>
   
    <p> {props.tags[0]} </p>
  <p>{props.tags[1]}</p>
  <p> {props.tags[2]}</p> </div>
   </div> 
  
 }
 
 export default Card;
