import mediaAssets from "../../../AssetRouter";
import { useEffect } from "react";
import Collapsible from "../../common/collapsibleWidgetReact";


function InstantiateDropdowns({ items }) {
  return (
    <div>
      {items.map(([title, content], index) => (
        <div key={index}>
          <br />
          <Collapsible title={title} className="collapsible">
            <br />
            {content}
            <br />
          </Collapsible>
          <br />
        </div>
      ))}
    </div>
  );
}
function triggerExpand() {
  const dialog = document.querySelector("dialog");
  dialog?.showModal();

  const closeBtn = document.getElementById("closeDialog");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close(), { once: true });
  }
}


export default function NmcmFullsizeArticle({ _articleInfo, _category, _dropdownInfo, _expandArticleInfo }) {
  return (
    <div className="article-clump-cascade">
      <img src="../../src/assets/nmcm/infoico.png" style={{ width: "5%" }} />
      {_articleInfo[0]}
      <br />
      <p style={{ fontSize: "11px", paddingLeft: "1%" }}>{_category}</p>

      {_articleInfo[2]?.includes("/") && (
        <a href={_articleInfo[2]} id="article-clump-cascade-inheader-download">
          <img
            id="article-clump-cascade-inheader-download-img"
            src="../../src/assets/nmcm/infoico.png"
          />
          {_articleInfo[1]}
        </a>
      )}

      <dialog className="article-show-dialog-element">
        <button id="closeDialog"><b>X</b></button>
        <div className="article-show-dialog">
          <h3></h3>
          <div className="article-show-dialog-internaldiv-content">
          </div>
        </div>
      </dialog>

      <div id="article-clump-cascade">
        {/* This now supports JSX like <img>, <p>, <b>, etc. */}
        {_articleInfo[3]}

        {_dropdownInfo?.length > 0 && (
          <InstantiateDropdowns items={_dropdownInfo} />
        )}
        <br />
      </div>
    </div>
  );
}
