import { useLocation, useParams } from "react-router";
import { default as db } from "../../api/db.json";
import Carrousel from "../../components/product/Carrousel";
import Tags from "../../components/product/Tags";
import NotFound from "./NotFound";
import Rating from "../../components/product/rating";
import Dropdown from "../../components/ui/Dropdown";

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
    // console.log(product);
    // console.log(product.rating);
    const { name: hostName, picture: hostPicture } = product.host;
    return (
        <>
            <Carrousel pictures={product.pictures} id={props.id} />
            <div className="product-header flex justify-between">
                <div className="product-info">
                    <h2 className="product-info_title">{product.title}</h2>
                    <p className="product-info_location">{product.location}</p>
                    <div className="product-visuals ">
                        <Tags id={product.id}>{product.tags}</Tags>
                    </div>
                </div>
                <div className="product-host flex flex-col justify-between">
                    <div className="product-host_info flex items-center ">
                        <p className="product-host_name"> {hostName}</p>
                        <img
                            src={hostPicture}
                            alt=""
                            className="product-host_img"
                        />
                    </div>
                    <div className="product-visuals ">
                        <Rating>{product.rating}</Rating>
                    </div>
                </div>
            </div>
            <div className="product-dropdown flex">
                <Dropdown title="Description" id="product.id">
                    {product.description}
                </Dropdown>
                <Dropdown title="Équipements" id="product.id">
                    {product.equipments}
                </Dropdown>
            </div>
        </>
    );
}

export default Products;
