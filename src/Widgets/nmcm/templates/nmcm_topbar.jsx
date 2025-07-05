import React, { useEffect, useState } from 'react';
import tickerTex from '../../../Widgets/nmcm/tickercontent.txt';

export default function NmcmTopbar() {
    const currentPath = window.location.pathname;

  const [tickerText, setTickerText] = useState("Loading...");
  
    useEffect(() => {
    fetch(tickerTex)
      .then((res) => res.text())
      .then((text) => setTickerText(text))
      .catch((e) => setTickerText("More stuff in the works!"));
  }, []);
  
  return (
    <div className = "topbar">
      <div className="topbar-logoholder">
        <a
          href="/"
          style={{
            cursor: "url('/gfx/cursor/cursor-link.png'), auto",
            float: "left",
          }}
        >
          <img id="logo-img" />
        </a>
      </div>
      <div className="topbar-navbar">
        <a href="/" id={currentPath === '/pages/nmcm/index.html' ? 'nav-button-pressed' : 'nav-button'}>NEWS</a>
        <a href="/pages/nmcm/cats/games.html" id={currentPath === '/pages/nmcm/cats/games.html' ? 'nav-button-pressed' : 'nav-button'} style={{ marginLeft: "150px" }}>GAMES</a>
        <a href="/pages/nmcm/cats/modding.html" id={currentPath === '/cats/vids.html' ? 'nav-button-pressed' : 'nav-button'} style={{ marginLeft: "300px" }}>MODDING</a>
        <a href="/pages/nmcm/cats/vids.html" id={currentPath === '/cats/vids.html' ? 'nav-button-pressed' : 'nav-button'} style={{ marginLeft: "450px" }}>VIDEOS</a>
        <a href="/pages/nmcm/cats/misc.html" id={currentPath === '/cats/vids.html' ? 'nav-button-pressed' : 'nav-button'} style={{ marginLeft: "600px" }}>MISC</a>
        <a href="/pages/nmcm/cats/about.html" id={currentPath === '/cats/vids.html' ? 'nav-button-pressed' : 'nav-button'} style={{ marginLeft: "750px" }}>ABOUT</a>
      </div>
      <div id="navbar-infobox">
        Newest updates from NMCM | Home of tech optimism
      </div>
      <div id="marquee-cont">
        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td width="50px" style={{ background: "#1174A8" }}>
                <button id="ticker-title">Newest Stuff:</button>
              </td>
              <td id="marquee">
                <marquee id="scroll-cross">{tickerText}</marquee>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
