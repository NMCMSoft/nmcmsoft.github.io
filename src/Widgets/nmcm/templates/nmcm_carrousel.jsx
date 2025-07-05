import mediaAssets from "../../../AssetRouter";
export default function NmcmCarrousel() {
  return (
    <div className="content-slider">
      <div className="slider">
        <div className="mask">
          <ul>
            <li className="anim1">
              <div className="quote">
                <img src= {mediaAssets.media.carrouselSet.carrousel0} />
              </div>
              <div className="source" id="carousel-descriptor">
                <p style={{ fontSize: "11px" }}>1/5</p>
                <p id="carousel-descriptor-genre">Game Update</p>
                <b style={{ fontSize: "18px" }}>NEW UPDATE</b>
                <br />
                New The Liminal Scope update launches with more maps!{" "}
                <br></br><br></br>
                <a href="#" id="carousel-descriptor-linktext">
                  <span id="carousel-descriptor-linkbutton">READ MORE</span>
                </a>
              </div>
            </li>

            <li className="anim2">
              <div className="quote">
                <img src={mediaAssets.media.carrouselSet.carrousel1} />
              </div>
              <div
                className="source"
                id="carousel-descriptor"
                style={{ height: "220px" }}
              >
                <p style={{ fontSize: "11px" }}>2/5</p>
                <p id="carousel-descriptor-genre">Misc</p>
                <b style={{ fontSize: "18px" }}>THE WAYBACK MACHINE</b>
                <br />
                Website creation is an iterative process. See how the site evolved!{" "}                <br></br><br></br>

                <a href="#" id="carousel-descriptor-linktext">
                  <span id="carousel-descriptor-linkbutton">READ MORE</span>
                </a>
              </div>
            </li>

            <li className="anim3">
              <div className="quote">
                <img src= {mediaAssets.media.carrouselSet.carrousel2} />
              </div>
              <div
                className="source"
                id="carousel-descriptor"
                style={{ height: "220px" }}
              >
                <p style={{ fontSize: "11px" }}>3/5</p>
                <p id="carousel-descriptor-genre">Projects</p>
                <b style={{ fontSize: "18px" }}>RIVAL RAVAGE</b>
                <br />
                An team based shooter inspired by the golden era of FPS{" "}            <br></br><br></br>

                <a href="#" id="carousel-descriptor-linktext">
                  <span id="carousel-descriptor-linkbutton">READ MORE</span>
                </a>
              </div>
            </li>

            <li className="anim4">
              <div className="quote">
                <img src= {mediaAssets.media.carrouselSet.carrousel3} />
              </div>
              <div
                className="source"
                id="carousel-descriptor"
                style={{ height: "220px" }}
              >
                <p style={{ fontSize: "11px" }}>4/5</p>
                <p id="carousel-descriptor-genre">Projects</p>
                <b style={{ fontSize: "18px" }}>PROTOTYPES</b>
                <br />
                Game dev is hard, not everything works out. Click here for an{" "} 
                <b>exclusive</b> look into cancelled game prototypes.{" "}                 <br></br><br></br>

                <a href="#" id="carousel-descriptor-linktext">
                  <span id="carousel-descriptor-linkbutton">READ MORE</span>
                </a>
              </div>
            </li>

            <li className="anim5">
              <div className="quote">
                <img src={mediaAssets.media.carrouselSet.carrousel4} />
              </div>
              <div
                className="source"
                id="carousel-descriptor"
                style={{ height: "220px" }}
              >
                <p style={{ fontSize: "11px" }}>5/5</p>
                <p id="carousel-descriptor-genre">Projects</p>
                <b style={{ fontSize: "18px" }}>ANDROID GAME</b>
                <br />
                Read about an exciting new prototype coming to phones!                <br></br><br></br>
                <a href="#" id="carousel-descriptor-linktext">
                  <span id="carousel-descriptor-linkbutton">READ MORE</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
