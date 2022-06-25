// import Card from "./Card"
import Subheader from "./Subheader"


export default function Content({data}) {
    // console.log(data)
    // const cards = data.map((ele)=>{
    //     return (
    //         <Card data={ele}/>
    //     )
    // })
    return (
        <div className="content">
            <Subheader />
            {/* {cards} */}
        </div>
    )
}