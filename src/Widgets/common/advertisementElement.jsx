import React from "react";

const advertHorizontal = [
        "/src/assets/nmcm/fakeads/ad1hor.gif",
        "/src/assets/nmcm/fakeads/ad2hor.gif",
        "/src/assets/nmcm/fakeads/ad3hor.gif",
        "/src/assets/nmcm/fakeads/ad4hor.gif",
        "/src/assets/nmcm/fakeads/ad5hor.gif",
        "/src/assets/nmcm/fakeads/ad6hor.gif",
    ]
    const advertHorizontal_Link = [
        "hreflink!",
        "hreflink!",
        "hreflink!",
        "hreflink!",
        "hreflink!",
        "hreflink!",
    ]
    const advertVertical = [
      "/src/assets/nmcm/fakeads/ad1vert.gif",
      "/src/assets/nmcm/fakeads/ad2vert.gif",
      "/src/assets/nmcm/fakeads/ad3vert.gif",
      "/src/assets/nmcm/fakeads/ad4vert.gif",
    ]
    const advertVertical_Link = [
      "href!",
      "href!",
      "href!",
      "href!",
    ]
    const advertSquare = [
      "/src/assets/nmcm/fakeads/ad1rectangle.gif",
      "/src/assets/nmcm/fakeads/ad1vert-tangle.gif",
    ]
    const advertSquare_Link = [
      "#",
      "#",
    ]

function GenerateAdvert({ advType }) {
  var _generated = null;
  if (advType === "horizontal") {
    _generated = Math.floor(Math.random() * advertHorizontal_Link.length);
    return (
      <a href={advertHorizontal_Link[_generated]}>
        <img src={advertHorizontal[_generated]} alt="Ad" className="article-ad-image"/>
      </a>
    );
  }

  if (advType === "vertical") {
    _generated = Math.floor(Math.random() * advertVertical_Link.length);
    return (
      <a href={advertVertical_Link[_generated]}>
        <img src={advertVertical[_generated]} alt="Ad" className="article-ad-image"/>
      </a>
    );
  }

  if (advType === "square") {
    _generated = Math.floor(Math.random() * advertSquare_Link.length);
    return (
      <a href={advertSquare_Link[_generated]}>
        <img src={advertSquare[_generated]} alt="Ad" className="article-ad-image"/>
      </a>
    );
  }
  return null;
}


export default function AdvertElement({advertCategory}){

    return(
        <div>
            <div className="tooltip-advert-context">Advertisement
            <span className="tooltiptext">Advertisements on this website and subsequent sub-pages are NOT REAL and do not contain any actual advertising.</span>
            </div>
            
            <div><GenerateAdvert advType={advertCategory} /></div>
            
        </div>
    );
}