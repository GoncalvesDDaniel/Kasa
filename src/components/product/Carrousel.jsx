import { React, useState } from "react";
import Carrousel_arrow from "../../assets/images/Carrousel_arrow.svg";

function Carrousel(props) {
    const pictures = props.pictures;
    const [carrouselIndex, setCarrouselIndex] = useState(0);

    function previousPic() {
        let bufferIndex = carrouselIndex - 1;
        if (bufferIndex < 0) {
            setCarrouselIndex(() => pictures.length - 1);
        } else {
            setCarrouselIndex(() => carrouselIndex - 1);
        }
    }
    function nextPic() {
        let bufferIndex = carrouselIndex + 1;
        if (bufferIndex >= pictures.length) {
            setCarrouselIndex(() => 0);
        } else {
            setCarrouselIndex(() => carrouselIndex + 1);
        }
    }
    return (
        <>
            <div className="carrousel relative">
                <button
                    className={`carrousel-btn carrousel-btn_previous absolute ${
                        pictures.length < 2 ? "none" : ""
                    }`}
                    onClick={previousPic}
                >
                    <img src={Carrousel_arrow} alt="Previous Photo" />
                </button>
                <img
                    src={pictures[carrouselIndex]}
                    className="carrousel-pic"
                ></img>
                <p className="carrousel-count absolute">
                    {`${carrouselIndex + 1}/${pictures.length}`}
                </p>
                <button
                    className={`carrousel-btn carrousel-btn_next absolute ${
                        pictures.length < 2 ? "none" : ""
                    }`}
                    onClick={nextPic}
                >
                    <img src={Carrousel_arrow} alt="Previous Photo" />
                </button>
            </div>
        </>
    );
}

export default Carrousel;
