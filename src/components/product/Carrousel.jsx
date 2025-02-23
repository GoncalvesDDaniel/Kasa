import { React, useState, useEffect } from "react";
import Carrousel_arrow from "../../assets/images/Carrousel_arrow.svg";

function Carrousel(props) {
    const pictures = props.pictures;
    const [carrouselIndex, setCarrouselIndex] = useState(0);

    // useEffect(() => {
    //     document.querySelector(".carrousel-pic").src =
    //         pictures.at(carrouselIndex);
    // }, [carrouselIndex]);

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
                    className="carrousel-btn carrousel-btn_previous absolute"
                    onClick={previousPic}
                >
                    <img src={Carrousel_arrow} alt="Previous Photo" />
                </button>
                <img
                    src={pictures[carrouselIndex]}
                    className="carrousel-pic"
                ></img>
                <button
                    className="carrousel-btn carrousel-btn_next absolute"
                    onClick={nextPic}
                >
                    <img src={Carrousel_arrow} alt="Previous Photo" />
                </button>
            </div>
        </>
    );
}

export default Carrousel;
