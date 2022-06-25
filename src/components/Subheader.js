import "../styles/Subheader.css"
import { Link} from "react-router-dom"

export default function Subheader() {
    return (
        <>
            <div className="subheader">
                <Link to="/" style={{textDecoration:"none"}}>
                    <p className="subheader--text bold">Home</p>
                </Link>
                <Link to="/shirts" style={{textDecoration:"none"}}>
                    <p className="subheader--text bold">Shirts</p>
                </Link>
                <Link to="/pants" style={{textDecoration:"none"}}>
                    <p className="subheader--text bold">Pants</p>
                </Link>
            </div>
        </>
    )
}