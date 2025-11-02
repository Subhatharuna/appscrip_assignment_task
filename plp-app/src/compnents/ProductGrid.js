import ProductCard from "./ProductCard";
import './ProductGrid.css'

const ProductGrid = ({ products }) => (
  <section className="grid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </section>
);
export default ProductGrid;
