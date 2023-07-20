import React, {useState} from "react";
import "./Dictionary.css"; 
import axios from "axios"; 

export default function Dictionary(){
    let [Keyword, setKeyword] = useState(""); 

function handleResponse(response){
   console.log(response) 
}


function search(event){
event.preventDefault();
alert(`Searching for ${Keyword} definition`);
let apiKey = "eab04436t3405o6e84aadcd05339dfb6"
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse); 
}

function handlekeywordChange(event){
   setKeyword(event.target.value);
}

    return <div className="Dictionary">
    <form onSubmit={search}>
        <input type="search" onChange={handlekeywordChange} />
    </form>
    </div>
}