import "../styles/Card.css"

export default function Card({info, addToCart}) {
    return (
        <div className="card">
            <div className="card--img--box">
                <img src={`/Frontend-Amazon-Clone/images/${info.img}`} className="card--img" alt='img'/>
            </div>
            <div className="card--details">

                <div className="card--title">{info.title}</div>
                <p className="card--inventory">Stock: {info.inventory}</p>
                <p className="card--cost">Price: ₹{info.cost}</p>
                <div className="card--button--box">
                    <button className="card--button" onClick={()=>addToCart(info)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}