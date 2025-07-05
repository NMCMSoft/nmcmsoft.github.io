/*Info Soosage | HOME JSX renderer!*/
import React, { useState,useEffect } from 'react';
import "../../Styles/infosoosage/style.css"
import mediaAssets  from "../../AssetRouter";
import { createRoot } from 'react-dom/client';
import FooterRenderer from "../../Widgets/infosoosage/templates/infosoosage_footer"
import HeaderRenderer from "../../Widgets/infosoosage/templates/infosoosage_topbar"
import MainBlock from "/src/Widgets/infosoosage/templates/infosoosage_mainblock_tab"


function SetFaviconAndScrollbar() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = mediaAssets.favicons.infosoosage;
    document.head.appendChild(link);
  }, []);

  return null;
}

createRoot(document.createElement("div")).render(<SetFaviconAndScrollbar />);
createRoot(
  document.getElementById('main-renderer')).render(
    <MainRenderer/>
);


function MainRenderer() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      <SetFaviconAndScrollbar />
      <HeaderRenderer activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="center-wrapper">
        <MainBlock activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <FooterRenderer />
    </>
  );
}
