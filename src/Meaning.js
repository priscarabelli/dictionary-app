import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms"; 

export default function Meaning(props) { 
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
   {props.meaning.definition.map( function (definition, index){
    return(
<div key={index}>
  <p>Definition:{definition.definiton}</p>
  <p>Example:{definition.example}</p>
< Synonyms synonyms={definition.synonyms} />
</div>
    )
   })}
   </div>
  );
}