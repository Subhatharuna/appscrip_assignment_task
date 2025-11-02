import { useState, useEffect } from "react";
import Header from './compnents/Header'
import TopBar from "./compnents/TopBar";
import Filters from "./compnents/Filters";
import ProductGrid from "./compnents/ProductGrid";
import Footer from "./compnents/Footer";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [setSortType] = useState("recommended");
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);


  const handleFilter = (category) => {
    if (!category) setFiltered(products);
    else setFiltered(products.filter((p) => p.category === category));
  };


  const handleSort = (type) => {
    setSortType(type);
    const sorted = [...filtered];
    if (type === "priceLowHigh") sorted.sort((a, b) => a.price - b.price);
    else if (type === "priceHighLow") sorted.sort((a, b) => b.price - a.price);
    else if (type === "newest") sorted.reverse();
    setFiltered(sorted);
  };

  return (
    <div className="App">
      <Header/>
      <hr/>
      <div className='content-container'>
        <h1 className='content-heading'>DISCOVER OUR PRODUCTS</h1>
        <p className='content-paragraph'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <TopBar count={filtered.length} showFilters={showFilters} toggleFilters={() => setShowFilters((prev) => !prev)} onSortChange={handleSort}/>
      <div className="main-layout">
        {showFilters && (
          <aside className="filters-section">
            <Filters onFilterChange={handleFilter} />
          </aside>
        )}
        
        <ProductGrid products={filtered} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
