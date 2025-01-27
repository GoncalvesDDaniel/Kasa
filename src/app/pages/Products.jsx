import { useLocation, useParams } from "react-router";

function Products() {
    const location = useLocation();
    const params = useParams();
    console.log(params.productsId);
    if (!location.state) {
    } else {
    }
    // const { cardClick } = location.state || {};
    // console.log(cardClick, "products");
    // return <h1>`${product.title}`</h1>;
}

export default Products;
