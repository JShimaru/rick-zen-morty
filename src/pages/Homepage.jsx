import { useState } from "react";
import Refresh from "../components/Refresh";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Homepage(){

    const [numberOfCards, setNumberOfCards] = useState(0)


function number(event){

    if(event.target.value > 5 || event.target.value < 1){
        alert("Please choose a number between 1 and 5!")
    }else{
        let cards = event.target.value
        console.log(cards)
        setNumberOfCards(cards)
        console.log(numberOfCards)
    }
}

console.log(numberOfCards)


    
    return(
        <div>
            <Header />
            {numberOfCards ? null : (<><div className="Count"><h2>How many cards would you like?</h2>
            <input onChange={number} type="number" placeholder="Enter number 5 or below..." autoFocus></input></div></>)}
            <Cards quantity={numberOfCards} />
            <Refresh />
            <Footer />
        </div>
    )
}

export default Homepage;