import "./productlist.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work and Projects</h1>
        <p className="pl-desc">
        As a software engineer, I have completed several personal projects that demonstrate my expertise in a range of cutting-edge technologies.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;