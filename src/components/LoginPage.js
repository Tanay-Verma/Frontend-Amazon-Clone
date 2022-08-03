// import google from "../images/google.png"
// import facebook from "../images/facebook.png"
// import twitter from "../images/twitter.png"
import "../styles/LoginPage.css"
import {Link} from "react-router-dom"


export default function LoginPage({setEmail,setPassword,handleLoginClick}) {
    return (
        <div className="login--wrapper">
            <div className="loginPage">
                <h2 className="loginPage--title">Login</h2>
                <p className="loginPage--user box--lable">Username</p>
                <input className="loginPage--user--input box--input" type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
                <p className="loginPage--pass box--lable">Password</p>
                <input className="loginPage--pass--input box--input" type="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                <p className="loginPage--forgot--pass">Forgot Password?</p>
                <button className="loginPage--login" onClick={handleLoginClick}>LOGIN</button>
                <p className="loginPage--signup">Or Sign Up Using</p>
                <div className="socials--wrapper">
                    <img src="/Frontend-Amazon-Clone/images/google.png" className="socials" alt="facebook" />
                    <img src="/Frontend-Amazon-Clone/images/facebook.png" className="socials" alt="twitter" />
                    <img src="/Frontend-Amazon-Clone/images/twitter.png" className="socials" alt="google" />
                </div>
                <p className="loginPage--signup">Or Sign Up Using</p>
                <button className="loginPage--signup--btn"><Link to="/signup" style={{textDecoration:"none"}}>SIGN UP</Link></button>
            </div>
        </div>
    )
}