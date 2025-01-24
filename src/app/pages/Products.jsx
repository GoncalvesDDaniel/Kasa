import { useLocation } from "react-router";

function Products() {
    const location = useLocation();
    console.log(location.state);
    // const { cardClick } = location.state || {};
    // console.log(cardClick, "products");
    // return <h1>`${product.title}`</h1>;
}

export default Products;
