import ZenQuotes from "./ZenQuote";
import Characters from "./Characters";

function Card(){

    return(
        <div className="Stage">
            <div className="Card">
            <Characters />
            <div className="CardQuote">
            <ZenQuotes />
            </div>
            </div>
        </div>
    )
}

export default Card;