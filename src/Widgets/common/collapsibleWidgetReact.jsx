import { useState } from "react";

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-wrapper">
      <button type="button" className={`collapsible ${isOpen ? "active" : ""}`} onClick={toggle}>
        <span style={{ float: "left" }}>{title}</span>
        <span className="collapsible-symbol" style={{ float: "right" }}>
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div className="collapsible-content" style={{ display: isOpen ? "block" : "none" }}>
        {children}
      </div>
    </div>
  );
}
