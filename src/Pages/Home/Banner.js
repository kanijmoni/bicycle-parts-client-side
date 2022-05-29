import React from 'react';
import banner from "../../assets/240_F_274597057_EbfIOMpY47lFFk2p7SbbHsHPPjqcMGyR.jpg";
import banner1 from "../../assets/240_F_95258098_oWnkhlHQWflsMMkQy58pDPTEc3lQxKrc.jpg";
import banner2 from "../../assets/download.jpg";
import banner3 from "../../assets/download (2).jpg";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner} alt='' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner1} alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner2} alt='' className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={banner3} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;