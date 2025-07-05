export default function NmcmSideBar() {
  return (
    <div>
      <ul>
        <li id="nav-list" style={{ background: "none" }}>Featured Categories</li>
        <li id="nav-list"><a href="#" className="nav-listhref">Rival Ravage Updates</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">New Website!</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Cancelled prototypes</a></li>
      </ul>

      <ul>
        <li id="nav-list" style={{ background: "none" }}>Rival Ravage Mod Repository</li>
        <li id="nav-list"><a href="#" className="nav-listhref">Map addons</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Weapon reskins</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Character reskins</a></li>
      </ul>

      <ul>
        <li id="nav-list" style={{ background: "none" }}>Rival Ravage Modding Tutorials</li>
        <li id="nav-list"><a href="#" className="nav-listhref">Modifying AI</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Using GOLDSRC modding resources</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Using the RR SDK</a></li>
      </ul>

      <ul>
        <li id="nav-list" style={{ background: "none" }}>Games by NMCM</li>
        <li id="nav-list"><a href="#" className="nav-listhref">Rival Ravage (2023)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">The Liminal Scope (2022)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Dragon Duel (2020)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Ferrari Turbo Challenge (2014)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">The Brawler (2014)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Nintendo Retro Classic Pinball (2014)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Medieval Conquest (2013)</a></li>
        <li id="nav-list"><a href="#" className="nav-listhref">Unity Motors - Paradise Race v2 (2013)</a></li>
      </ul>

      <div className="article-clump-cascade">
        <a style={{ paddingLeft: "12px" }}>Top Sites</a>
        <div id="article-clump-cascade" style={{ textAlign: "center",overflow:"hidden" }}>
          <a style={{ fontSize: "12px" }}>Useful websites on the information super-highway</a>
          <hr/>
          <a href="/pages/infosoosage/index.html" id="topsites-minipromo-wrapper">
            <img id="topsites-minipromo-img" src="/src/assets/nmcm/mini-promos/infosausage.gif" />
          </a>
          <a href="#" id="topsites-minipromo-wrapper">
            <img id="topsites-minipromo-img" src="/src/assets/nmcm/mini-promos/vibetrybe.gif" />
          </a>
          <a href="#" id="topsites-minipromo-wrapper">
            <img id="topsites-minipromo-img" src="/src/assets/nmcm/mini-promos/buzzpulse.gif" />
          </a>
        </div>
      </div>
    </div>
  );
}
