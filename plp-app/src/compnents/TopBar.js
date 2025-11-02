import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import './TopBar.css'

const TopBar=({count, onSortChange, showFilters, toggleFilters})=>{
  const [showMenu, setShowMenu] = useState(false);
  return(
    <div className="container">
    <hr/>
    <div className="topbar-container">
        <div className="item-filter-container">
           <span className="item-container">{count} Items</span>
           <button className="filters-button" onClick={toggleFilters}>{showFilters ? "<  HIDE FILTERS" : ">  SHOW FILTERS"}</button>
        </div>
        <div className="sort-menu">
          <button className="recommended-button" onClick={() => setShowMenu(!showMenu)}>
            RECOMMENDED ▾
          </button>
          {showMenu && (
            <ul className="dropdown">
              <li onClick={() => onSortChange("recommended")} className="active"><IoIosCheckmark className="mark-icon"/> RECOMMENDED</li>
              <li onClick={() => onSortChange("newest")} className="default">NEWEST FIRST</li>
              <li onClick={() => onSortChange("popular")} className="default">POPULAR</li>
              <li onClick={() => onSortChange("priceHighLow")} className="default">PRICE: HIGH TO LOW</li>
              <li onClick={() => onSortChange("priceLowHigh")} className="default">PRICE: LOW TO HIGH</li>
            </ul>
          )}
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default TopBar