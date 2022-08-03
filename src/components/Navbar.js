import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Navbar({ setInput, cart }) {
    console.log(cart)
    function handelChange(event) {
        let { value } = event.target
        // console.log(value)
        setInput(value)
    }
    return (
        <nav className="navbar">
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src="/Frontend-Amazon-Clone/images/amazon.png" alt="amazon" className="navbar--logo" />
            </Link>
            <FontAwesomeIcon icon={faLocationDot} className="navbar--icon location-dot" />
            <div className="navbar--greeting">
                <p className="line1">Hello</p>
                <p className="line2">Select your address</p>
            </div>
            <button className="navbar--all-btn">All</button>
            <input type="text" className="navbar--search" onChange={handelChange} />
            <button className="navbar--search--btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar--icon" />
            </button>
            <img src="/Frontend-Amazon-Clone/images/flag.png" alt="flag" className="flag" />
            <ul className="navbar--list">
                <li className="navbar--ele">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className="navbar--login">
                            <p className="line1">Hello,Sign in</p>
                            <p className="line2">Account &amp; Lists</p>
                        </div>
                    </Link>
                </li>
                <li className="navbar--ele">
                    <div>
                        <p className="line1">Returns</p>
                        <p className="line2">&amp; Orders</p>
                    </div>
                </li>
                <li className="navbar--ele">
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <img src="/Frontend-Amazon-Clone/images/cart.png" className="cart" />
                    </Link>
                </li>
                <li className="navbar--ele">
                    <div className="cart-counter">{cart.length}</div>
                </li>
            </ul>
        </nav>
    )
}