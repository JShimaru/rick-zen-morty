import Card from "./Card";

function Cards(props){

console.log(props)

    function generateCards(){
        let number = props.quantity;
        if(number==1){
            return (<><Card /></>)
        }else if(number==2){
            return (<><Card /><Card /></>)
        }else if(number==3){
            return (<><Card /><Card /><Card /></>)
        }else if(number==4){
            return (<><Card /><Card /><Card /><Card /></>)
        }else if(number==5){
            return(<><Card /><Card /><Card /><Card /><Card /></>)
        }else{
            return (<><div className="Landing"><iframe width="560" height="315" src="https://www.youtube.com/embed/zkIqz2U6Vc0" title="YouTube video player" frameborder="15px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe><h1>Wubba Lubba Dub Dub!</h1></div></>)
        }
    }


    return(
        <div className="Cards">
            {generateCards()}
        </div>
    )
}

export default Cards;