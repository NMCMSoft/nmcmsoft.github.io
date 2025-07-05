import NmcmTopbar from '../../Widgets/nmcm/templates/nmcm_topbar';
import NmcmSideBar from '../../Widgets/nmcm/templates/nmcm_sidebar';
import NmcmFooter from '../../Widgets/nmcm/templates/nmcm_footer';
import NmcmCarrousel from '../../Widgets/nmcm/templates/nmcm_carrousel';
import NmcmFullsizeArticle from "../../Widgets/nmcm/templates/nmcm_fullsize_article"
import AdvertElement from "../../Widgets/common/advertisementElement"

import mediaAssets from '../../AssetRouter';
import { createRoot } from 'react-dom/client';
import { createElement, useEffect } from 'react';
import "../../Styles/nmcm/style.css"

function SetFaviconAndScrollbar() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = mediaAssets.favicons.nmcm;
    document.head.appendChild(link);
  }, []);

  return null;
}
function triggerExpand(imgSource, imgHeader) {
  const dialog = document.querySelector("dialog");
  if (!dialog) return;

  dialog.showModal();
  
  const contentDiv = dialog.querySelector(".article-show-dialog-internaldiv-content");
  if (contentDiv) {
    contentDiv.innerHTML = "";
    const img = document.createElement('img');
    img.src = imgSource;
    contentDiv.appendChild(img);
  }
  const headerDiv = dialog.querySelector(".article-show-dialog h3");
  if(headerDiv){
    headerDiv.innerHTML=imgHeader;
  }
  const closeBtn = document.getElementById("closeDialog");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dialog.close();
      headerDiv.innerHTML="";
    }, { once: true });
  }
}
createRoot(document.createElement("div")).render(<SetFaviconAndScrollbar />);


createRoot(
    document.getElementById('topbar-renderer')).render(
    <NmcmTopbar />
);


createRoot(
    document.getElementById('sidebar-renderer')).render(
    <NmcmSideBar />
);


createRoot(
    document.getElementById('caroussel-renderer')).render(
    <NmcmCarrousel />
);


createRoot(
    document.getElementById('footer-renderer')).render(
    <NmcmFooter />
);


createRoot(
    document.getElementById('articlerendererdiv')).render(
      <ArticleBuilder/>//Multiple article support!
);


export default function ArticleBuilder(){

    /*useEffect(() => {
    var url = 'https://newsapi.org/v2/top-headlines/sources?' +
          'category=business&' +
          'apiKey=84bde0cea4fb4c98b372ce71e50213e3';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("News API Response:", data);
      })
      .catch(err => {
        console.error("Failed to fetch news:", err);
      });
  }, []);*/

  return(<div>
  <NmcmFullsizeArticle 
    _articleInfo={[
    "Rival Ravage Announcement",
    "",
    "",
    <>
      <p>After 9 months in development, I'm finally ready to announce the next game in the NMCM game lineup.</p>
      <p>Inspired by the golden age of FPS, Rival Ravage offers a competitive-shooter like experience that is primarily geared towards a single player experience, much like the not-so well known entry in the acclaimed Counter-Strike series, Counter-Strike: Condition Zero.</p>
      <button onClick={() => triggerExpand(
        mediaAssets.media.rrScreenshot0_Path,
        "Rival Ravage first look (CMP_MINE)")}>
      <img src={mediaAssets.media.rrScreenshot0} style={{ width: "100%" }} />
      </button>
      <button onClick={() => triggerExpand(
        mediaAssets.media.rrScreenshot1_Path,
        "Rival Ravage gameplay look")}>
      <img src={mediaAssets.media.rrScreenshot1} style={{ width: "100%" }} />
      </button>
    </>
  ]}

    _category={"Project Update - OCT 2024"}
    _dropdownInfo={[
    ["Is this game still in development?", "Yes, this game is still being developed as of July 4th, 2024. It is expected to be done within the end of the year, most likely releasing in February 2025, if all goes as expected!"],
    ["Can I mod this game?", "Yes. The goal with creating this game is to make modding easy, by creating dedicated file structures that nerf the difficulty of modding to basically a drag & drop operation. There are also plans of creating dedicated SDKs for custom content, as well as incorporating well established SDKs to work with the game. However the tools are still in early stages of development."],
    ["What game modes will be included in the game?", "At the time of writing this, July 2024, the goal is to include at least 3 base game modes on launch; The classic red VS blue team round-based team deathmatch, capture the flag and a basic zombie mode, with properly optimized bots that will carry the game modes and create the proper single player/offline experience."],
  ]
}
  _expandArticleInfo={
    [
      ""
    ]
  }
  />
  <br/>
  <AdvertElement advertCategory={"horizontal"}/>
  <AdvertElement advertCategory={"square"}/>
  <br/>
  

  <br/>
  </div>);
}