import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Navbar({ setInput, cart }) {
    // console.log(cart)
    function handelChange(event) {
        let { value } = event.target
        // console.log(value)
        setInput(value)
    }

    function handleToggle(e) {
        const nav = document.querySelector(".navbar--list")
        const visibility = nav.getAttribute("data-visible")
        if (visibility === "false"){
            nav.setAttribute("data-visible", true)
            e.target.setAttribute("data-expanded",true)
        }
        else {
            nav.setAttribute("data-visible", false)
            e.target.setAttribute("data-expanded",false)
        }
    }

    return (
        <header className="primary--header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src="/Frontend-Amazon-Clone/images/amazon.png" alt="amazon" className="navbar--logo" />
            </Link>
            <button className="navbar--mobile--toggle" data-expanded="false" onClick={handleToggle}></button>
            <nav className="navbar">
                <ul className="navbar--list" data-visible="false">
                    <li className="navbar--ele">
                        <FontAwesomeIcon icon={faLocationDot} className="navbar--icon location-dot" />
                        <div className="navbar--greeting">
                            <p className="line1">Hello</p>
                            <p className="line2">Select your address</p>
                        </div>
                    </li>
                    <li className="navbar--ele">
                        <div className="navbar--searchbar">
                            <button className="navbar--all-btn">All</button>
                            <input type="text" className="navbar--search" onChange={handelChange} />
                            <button className="navbar--search--btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar--icon" />
                            </button>
                        </div>
                    </li>
                    <li className="navbar--ele">
                        <img src="/Frontend-Amazon-Clone/images/flag.png" alt="flag" className="flag" />
                    </li>
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
                        <div className="cart-counter">{cart.length}</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}