import Card from "../Card"
import data from "../../data"
export default function Pants({addToCart}){
    let pantData = data.filter(ele => ele.type==="pant")
    let pants = pantData.map(pant => <Card info={pant} addToCart={addToCart}/>)
    return (
        <div className="pants">
            {pants}
        </div>
    )
}