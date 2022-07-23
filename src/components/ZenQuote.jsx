import { useState, useEffect } from "react";
import axios from 'axios';
import GetQuote from "../services/RandomQuote";


function ZenQuotes(){

    let random = Math.floor(Math.random()*(1643))
    console.log(random)
    const [quote, setQuote] = useState([])

    async function GenQuote(){
        await axios.get(GetQuote).then(res => {
            let newQuote = res.data[random].text
            setQuote(newQuote)
        })
    }
    
    useEffect(()=>{
        GenQuote();
    },[])
    
    console.log(quote)

    return(
        <div className="Quote">
            <h4>{quote}</h4>
        </div>
    )
}


export default ZenQuotes;