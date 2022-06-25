import Navbar from "./components/Navbar"
import Subheader from "./components/Subheader"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shirts from "./components/routes/Shirts"
import Pants from "./components/routes/Pants"
import Home from "./components/routes/Home"
import Cart from "./components/routes/Cart"
import LoginPage from "./components/LoginPage"
import "./App.css"
import { useState } from "react"

function App() {
  let [input, setInput] = useState("")
  let [cart, setCart] = useState([])

  function addToCart(product) {
    console.log("clicked on add to cart", product)
    const productinCart = cart.find((ele) => ele.id === product.id)
    if (productinCart) {
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setInput={setInput} cart={cart} />
        <Subheader />
        <Routes>
          <Route path="/" element={<Home input={input} addToCart={addToCart} />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/shirts" element={<Shirts addToCart={addToCart} />}></Route>
          <Route path="/pants" element={<Pants addToCart={addToCart} />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} addToCart={addToCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
