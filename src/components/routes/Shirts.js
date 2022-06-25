import Card from "../Card"
import data from "../../data"
export default function Shirts({addToCart}){
    let shirtData = data.filter(ele => ele.type==="shirt")
    let shirts = shirtData.map(shirt => <Card info={shirt} addToCart={addToCart}/>)
    return (
        <div className="shirts">
            {shirts}
        </div>
    )
}