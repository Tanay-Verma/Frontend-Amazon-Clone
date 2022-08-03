import Navbar from "./components/Navbar"
import Subheader from "./components/Subheader"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shirts from "./components/routes/Shirts"
import Pants from "./components/routes/Pants"
import Home from "./components/routes/Home"
import Cart from "./components/routes/Cart"
import LoginPage from "./components/LoginPage"
import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import Signup from "./components/Signup"

function App() {
  useEffect(()=>{
    async function res(){
      let response = await axios.get('http://localhost:5000/')
      console.log(response.data)
    }
    res()
  },[])


  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [cnfPassword,setCnfPassword] = useState('')
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


  async function handleSignUpClick(){
    let response = await axios.post('http://localhost:5000/test/user', {email,password})
    alert(response.data.message)
  }


  async function handleLoginClick(){
    let response = await axios.post('http://localhost:5000/test/userAuth', {email, password})
    alert(response.data.message)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setInput={setInput} cart={cart} />
        <Subheader />
        <Routes>
          <Route path="/" element={<Home input={input} addToCart={addToCart} />}></Route>
          <Route path="/login" element={<LoginPage setEmail={setEmail} setPassword={setPassword} handleLoginClick={handleLoginClick}/>}></Route>
          <Route path="/signup" element={<Signup setEmail={setEmail} setPassword={setPassword} setCnfPassword={setCnfPassword} password={password} cnfPassword={cnfPassword} handleSignUpClick={handleSignUpClick}/>}></Route>
          <Route path="/shirts" element={<Shirts addToCart={addToCart} />}></Route>
          <Route path="/pants" element={<Pants addToCart={addToCart} />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} addToCart={addToCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
