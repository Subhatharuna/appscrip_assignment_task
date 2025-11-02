import { GiHamburgerMenu } from "react-icons/gi";
import { PiFediverseLogoLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "./Header.css"

const Header=()=>{
    return(
        <div>
            <header>
                <nav className="nav-container">
                    <div className="logo-menu-container">
                       <button className="menu-button" type="button"><GiHamburgerMenu className="menu-icon"/></button>
                       <div className="logo-container">
                          <PiFediverseLogoLight className="icon"/>
                          <h1 className="heading">Logo</h1>
                          <div className="icons">
                            <CiSearch className="icon"/>
                            <CiHeart className="icon"/>
                            <IoCartOutline className="icon"/>
                            <CgProfile className="icon profile-icon"/>
                            <select className="lan-container">
                                <option>Eng</option>
                            </select>
                          </div>
                        </div>
                   </div>
                   <div className="menu-container">
                    <a href="#shop" className="menu-active">SHOP</a>
                    <a href="#skills" className="menu-default">SKILLS</a>
                    <a href="#stories" className="menu-default">STORIES</a>
                    <a href="#about" className="menu-default">ABOUT</a>
                    <a href="#contactus" className="menu-default">CONTACT US</a>
                   </div>
                </nav>
            </header>
        </div>
    )
}
export default Header