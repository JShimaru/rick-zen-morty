import axios from "axios";
import { useEffect, useState } from "react";
import RaM from "../services/RaMimage"


function Characters(){

    const [image, setImage] = useState("")
    const [charName, setCharName] = useState("")

    const randomizePage = Math.floor((Math.random()*42)+1)
    const randomCharacter = Math.floor(Math.random()*20)



    async function wubbalub(){
        await axios.get(RaM+"/character?page="+randomizePage).then(res => {
            let character = res.data.results[randomCharacter].image
            let name = res.data.results[randomCharacter].name
    
            setCharName(name)
            setImage(character)
        })
    }

    useEffect(()=>{
       wubbalub() 
    },[])

    console.log(image)
    return(
        <div>
            <h3>{charName}</h3>
            <img src={image} alt={charName} />
        </div>
    )
}

export default Characters;