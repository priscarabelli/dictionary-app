import React, {useState} from "react";
import "./Dictionary.css"; 
import Results from "./Results"; 
import axios from "axios"; 

export default function Dictionary(){
    let [Keyword, setKeyword] = useState(""); 
    let [results , setResults] = useState(null); 
    
function handleResponse(response){
   setResults(response.data); 
}


function search(event){
event.preventDefault();
let apiKey = "eab04436t3405o6e84aadcd05339dfb6";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse); 
}

function handlekeywordChange(event){
   setKeyword(event.target.value);
}

    return( <div className="Dictionary">
    <form onSubmit={search}>
        <div className="input-box">
        <input type="search" onChange={handlekeywordChange} placeholder="Enter a word"/>
    </div>
    </form>
    <Results results={results}/>
    </div> ); 
}