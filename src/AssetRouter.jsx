/*
<summary>
Contains centralized mapping for all assets & media provided on the website
Used only for single loosely coupled assets. Enumerable assets stored in [] are imported
in their respective elements.
<summary/>
*/
/*Favicons*/
import nmcm_favicon from "./assets/nmcm/favicon.png";
import infosoosage_favicon from "./assets/infosoosage/favicon.png";

/*Media*/
import gamedlico from "./assets/nmcm/favicon.png";
import rrScreenshot0 from "/src/assets/nmcm/media/rr_promo_0.jpg";
import rrScreenshot1 from "/src/assets/nmcm/media/rr_promo_1.jpg";

import gameicoGeneral from "./assets/nmcm/gameico/gameico-general.png";
import gameico0 from "./assets/nmcm/gameico/dd.png";
import gameico1 from "./assets/nmcm/gameico/rr.png";
import gameico2 from "./assets/nmcm/gameico/tls.png";
import gameico3 from "./assets/nmcm/gameico/tt.png";

import infoIcon from "./assets/nmcm/infoico.png"
/*Carousel*/
import carrousel0 from  "./assets/nmcm/promo/carousell1.png";
import carrousel1 from  "./assets/nmcm/promo/carousell2.png";
import carrousel2 from  "./assets/nmcm/promo/carousell3.png";
import carrousel3 from  "./assets/nmcm/promo/carousell4.png";
import carrousel4 from  "./assets/nmcm/promo/carousell5.png";


const mediaAssets = {
  favicons: {
    nmcm: nmcm_favicon,
    infosoosage: infosoosage_favicon,
  },
  media:{
    gamedlico,
    rrScreenshot0,
    rrScreenshot0_Path: "/src/assets/nmcm/media/rr_promo_0.jpg",
    rrScreenshot1,
    rrScreenshot1_Path: "/src/assets/nmcm/media/rr_promo_1.jpg",

    carrouselSet: {
      carrousel0,
      carrousel1,
      carrousel2,
      carrousel3,
      carrousel4,
    },
    infoIcon,
    gameIcons:{
      gameicoGeneral,
      gameico0,
      gameico1,
      gameico2,
      gameico3,
    },
  }
};

export default mediaAssets;