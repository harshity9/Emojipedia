import { ReactDOM, useState } from "react";
import React from "react";
import Card from "./components/Cards";
import Data from "./emoji.json"

import { buildTimeValue } from "@testing-library/user-event/dist/utils";

function Createcards(Data){
  return <Card emoji={Data.emoji}
    description={Data.description}
  tags={Data.tags}
  />
}

function App() {
  const [search, setSearch]= useState("")
function handleChange(event){
  setSearch(event.target.value)}
  console.log(search)
 return (
    <div className="App">
<div className="searchbox"><input onChange={handleChange} placeholder="Search..."></input> 
    </div>
 <div className="content">
{Data.filter(data=>data.description.toLocaleLowerCase().includes(search)).map(Createcards)}

 </div>
    </div>
  );
}
export default App;
