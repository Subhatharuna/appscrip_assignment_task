import { useState } from "react";
import './Filters.css'

const Filters = ({ onFilterChange }) => {
  const [openSection, setOpenSection] = useState("idealFor");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return(
  <aside className="filters">
    <div className="filter-section">
        <label className="checkbox-label">
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

    <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("idealFor")}>
          <h4>IDEAL FOR</h4>
          <span className="arrow">{openSection === "idealFor" ? "▾" : "▸"}</span>
        </div>

        {openSection === "idealFor" && (
          <div className="filter-body">
            <p className="filter-all">All</p>
            <p className="filter-reset">Unselect all</p>
            <label><input type="checkbox" onChange={() => onFilterChange("men's clothing")} /> Men</label>
            <label><input type="checkbox" onChange={() => onFilterChange("women's clothing")} /> Women</label>
            <label><input type="checkbox" onChange={() => onFilterChange("kids")} /> Baby & Kids</label>
          </div>
        )}
      </div>
      

      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("occasion")}>
          <h4>OCCASION</h4>
          <span className="arrow">{openSection === "occasion" ? "▾" : "▸"}</span>
        </div>
        {openSection === "occasion" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>


      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("work")}>
          <h4>WORK</h4>
          <span className="arrow">{openSection === "work" ? "▾" : "▸"}</span>
        </div>
        {openSection === "work" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>

     <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("fabric")}>
          <h4>FABRIC</h4>
          <span className="arrow">{openSection === "fabric" ? "▾" : "▸"}</span>
        </div>
        {openSection === "fabric" && (
          <div className="filter-body">
            <p>All</p>
            <label><input type="checkbox" /> Cotton</label>
            <label><input type="checkbox" /> Wool</label>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("segment")}>
          <h4>SEGMENT</h4>
          <span className="arrow">{openSection === "segment" ? "▾" : "▸"}</span>
        </div>
        {openSection === "segment" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>


      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("suitable")}>
          <h4>SUITABLE FOR</h4>
          <span className="arrow">{openSection === "suitable" ? "▾" : "▸"}</span>
        </div>
        {openSection === "suitable" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>


      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("materials")}>
          <h4>RAW MATERIALS</h4>
          <span className="arrow">{openSection === "materials" ? "▾" : "▸"}</span>
        </div>
        {openSection === "materials" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>

      
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("pattern")}>
          <h4>PATTERN</h4>
          <span className="arrow">{openSection === "pattern" ? "▾" : "▸"}</span>
        </div>
        {openSection === "pattern" && (
          <div className="filter-body">
            <p>All</p>
          </div>
        )}
      </div>
  </aside>
  )
};
export default Filters;
