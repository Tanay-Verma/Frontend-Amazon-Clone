import CartCard from "../CartCard"
import "../../styles/Cart.css"

export default function Cart({cart, setCart, addToCart}) {
  let cartCards = cart.map(ele=>{
    return (<CartCard key={ele.id} info = {ele} handelRemove={handelRemove} reduceQty={reduceQty} addToCart={addToCart}/>)
  })

  let totalAmt = 0 
  cart.forEach(ele => {
    totalAmt += ele.quantity*ele.cost
  })

  function handelDelete(){
    setCart([])
  }

  function handelRemove(product){
    setCart(cart.filter(ele => ele.id !== product.id))
  }
  
  function reduceQty(product){
    const productinCart = cart.find((ele)=> ele.id=== product.id);
    if(productinCart.quantity === 1){
      handelRemove(product)
    }
    else{
      setCart(cart.map(ele => ele.id === product.id?{... productinCart , quantity: productinCart.quantity-1}:ele))
    }
  }

  console.log("totalAmt", totalAmt)
  return (
    <>
      <div className="cart--info--bar">
        <ul className="cart--ul">
          <li className="cart--ul--ele total--amt">Total Amount <p className="amt--val">{totalAmt}</p></li>
          <li className="cart--ul--ele"><button className="cart--empty--btn bold" onClick={handelDelete}>Empty Cart</button></li>
        </ul>
      </div>
      <div className="cart--product--cards">
        { cart.length !==0 && cartCards}
      </div>
    </>
  )
}
