import data from "../../data"
import Card from "../Card"
export default function Home({ input, addToCart }) {
    let filteredData = data.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase()))
    // console.log(filteredData)
    let results = filteredData === 0 ? "" : filteredData.map(ele => { return (<Card info={ele} addToCart={addToCart} />) })
    // console.log(results)
    return (
        <div className="home">
            {results}
        </div>
    )
}
