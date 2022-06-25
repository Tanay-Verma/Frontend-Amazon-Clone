// import google from "../images/google.png"
// import facebook from "../images/facebook.png"
// import twitter from "../images/twitter.png"
import "../styles/LoginPage.css"


export default function LoginPage() {
    return (
        <div className="login--wrapper">
            <div className="loginPage">
                <h2 className="loginPage--title">Login</h2>
                <p className="loginPage--user box--lable">Username</p>
                <input className="loginPage--user--input box--input" type="email" placeholder="Enter Your Email" />
                <p className="loginPage--pass box--lable">Password</p>
                <input className="loginPage--pass--input box--input" type="password" placeholder="Enter Your Password" />
                <p className="loginPage--forgot--pass">Forgot Password?</p>
                <button className="loginPage--login">LOGIN</button>
                <p className="loginPage--signup">Or Sign Up Using</p>
                <div className="socials--wrapper">
                    <img src="/images/google.png" className="socials" alt="facebook" />
                    <img src="/images/facebook.png" className="socials" alt="twitter" />
                    <img src="/images/twitter.png" className="socials" alt="google" />
                </div>
                <p className="loginPage--signup">Or Sign Up Using</p>
                <button className="loginPage--signup--btn">SIGN UP</button>
            </div>
        </div>
    )
}