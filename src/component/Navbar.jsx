import "./Navbar.css"
import homeIcon from "../icons/homeicon.png"
import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <Link className="link-navbar" to={"/home"}><img src={homeIcon} alt="home" /></Link>
            </div>
        </>
    )
}
export default Navbar;