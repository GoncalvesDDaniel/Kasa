import { useLocation, useParams } from "react-router";
import { default as db } from "../../api/db.json";
import Carrousel from "../../components/carrousel/carrousel";
import NotFound from "./NotFound";

function Products(props) {
    const location = useLocation();
    const params = useParams();
    let product;

    // if no state fetch into dn
    if (!location.state) {
        const database = db;
        product = database.find((item) => item.id === params.productsId);
    } else {
        product = location.state;
    }
    if (!product) {
        return <NotFound />;
    }
    console.log(product);
    console.log(product.host);
    // TODO get host name correctly
    const { name: hostName, picture: hostPicture } = product.host;
    return (
        <>
            <Carrousel cover={product.cover} />
            <div className="product-header flex justify-between">
                <div className="product-name">
                    <h2 className="product-name_title">{product.title}</h2>
                    <p className="product-name_location">{product.location}</p>
                </div>
                <div className="product-host flex items-center ">
                    <p className="product-host_name"> {hostName}</p>
                    <img
                        src={hostPicture}
                        alt=""
                        className="product-host_img"
                    />
                </div>
            </div>
        </>
    );
}

export default Products;
