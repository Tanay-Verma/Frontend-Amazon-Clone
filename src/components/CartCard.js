import React from 'react'
import "../styles/CartCard.css"


export default function CartCard({ info, handelRemove, reduceQty, addToCart }) {

  return (
    <>
      <div className="cartCard">
        <img src={`./images/${info.img}`} className="cartCard--item--img" />
        <div className="cartCard--item--name">{info.title}</div>
        <div className="cartCard--item--qty"><button className="minus--qty" onClick={() => reduceQty(info)}>-</button>{info.quantity}<button className="add--qty" onClick={() => addToCart(info)}>+</button></div>
        <div className="cartCard--item--total">{info.quantity * info.cost}</div>
        <button className="cartCard--item--remove--btn" onClick={() => handelRemove(info)}>Remove item</button>
      </div>
    </>
  )
}
