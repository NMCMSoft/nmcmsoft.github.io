export default function NmcmFooter() {
  return (
    <div>
      <ul style={{ float: "left", listStyle: "none", width: "25%", paddingLeft: "3%" }}>
        <li id="nav-list" style={{ background: "none" }}>External links</li>
        <a href="#" className="nav-listhref">
          <li id="nav-list">- GameJolt</li>
        </a>
        <a href="#" className="nav-listhref">
          <li id="nav-list">- Itch.io</li>
        </a>
        <a href="#" className="nav-listhref">
          <li id="nav-list">- YouTube</li>
        </a>
      </ul>

      <ul style={{ float: "left", listStyle: "none", width: "25%", paddingLeft: "6%" }}>
        <li id="nav-list" style={{ background: "none" }}>Contact NMCM</li>
        <li id="nav-list" style={{ background: "none", borderTop: "none" }}>GameJolt DMs</li>
        <li id="nav-list" style={{ background: "none", borderTop: "none" }}>Discord: nmcmmain</li>
        <li id="nav-list" style={{ background: "none", borderTop: "none" }}>
          <img src="/src/assets/nmcm/bottombadge.png" style={{ width: "70%" }} />
        </li>
      </ul>

      <ul style={{ float: "right", listStyle: "none" }}>
        <li id="nav-list" style={{ background: "none" }}>NMCM</li>
        <li id="nav-list" style={{ background: "none" }}>May 2024</li>
        <li id="nav-list" style={{ background: "none", borderTop: "none" }}>
          <img src="/src/assets/nmcm/review-ico.png" style={{ width: "70%" }} />
        </li>
      </ul>

      <ul style={{ float: "right", listStyle: "none" }}>
        <li>
          <img
            src="/src/assets/nmcm/streak2.png"
            style={{ width: "120%", marginLeft: "-10%", marginBottom: "-4.3%" }}
          />
        </li>
      </ul>
    </div>
  );
}
