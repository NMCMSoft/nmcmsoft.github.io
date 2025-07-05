import { useState,useEffect } from "react";
import flashPromoImg from "/src/assets/infosoosage/flashpromo.png"




function FeaturedEntertainmentWidget() {
    const [promo, setPromo] = useState(null);
    const [activeTab, setActiveTab] = useState("opt1");
    useEffect(() => {
        async function fetchPromo() {
            try {
                const response = await fetch("/infosoosage-promo-video.json");
                const data = await response.json();
                setPromo(data);
            } catch (err) {
                console.error("Failed to load promo data:", err);
            }
        }

        fetchPromo();
    }, [promo]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <div className="center-article-box-wrapper">
                <div className="center-article-box-titlebox"><p>FEATURED ENTERTAINMENT ON INFOSOOSAGE NETWORKS</p></div>
                <div className="center-article-box-contentbox" style={{ minHeight: "450px", maxHeight: "450px" }}>
                    <div className="tab">
                        <button
                            className={`tablinks ${activeTab === 'opt1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('opt1')}
                        >
                            GAMES
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'opt2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('opt2')}
                        >
                            VIDEOS
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'opt3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('opt3')}
                        >
                            MUSIC
                        </button>
                    </div>

                    {activeTab === "opt1" && (
                        <div id="opt1" className="tabcontent" style={{ display: 'block', paddingTop: '0px' }}>
                            <hr />
                            <p><b>InfoSoosage Arcade Top Picks:</b></p>
                            <br />
                            <div style={{ float: 'left' }}>
                                <img src="/src/assets/infosoosage/icons/featured-game.png" style={{ width: '42px', marginTop: '-15px' }} />
                                <a style={{ fontSize: '20px' }} href="#"><b>2D SOLITAIRE</b></a>
                                <br />
                                <img src="/src/assets/infosoosage/icons/featured-game-2.png" style={{ width: '42px' }} />
                                <a style={{ fontSize: '20px' }} href="#"><b>GOLF MASTER</b></a>
                            </div>
                            <div>
                                <ul style={{ listStyle: "'→'", float: "left", marginTop: "0" }}>
                                    <li><a href="#">PC-Man</a></li>
                                    <li><a href="#">Save the Couch!</a></li>
                                    <li><a href="#">Lunar Lander</a></li>
                                    <li><a href="#">Billiards</a></li>
                                    <li><a href="#">NASCAR</a></li>
                                    <li><a href="#">Urquell</a></li>
                                </ul>
                                <ul style={{ listStyle: "'→'", float: "left", marginTop: "0" }}>
                                    <li><a href="#">3D bike racing</a></li>
                                    <li><a href="#">3D pool</a></li>
                                    <li><a href="#">Spider solitare</a></li>
                                    <li><a href="#">NASCAR Cup</a></li>
                                    <li><a href="#">Pinball</a></li>

                                </ul>

                            </div>
                            <div style={{ paddingTop: "18%" }}>
                                <hr />
                                <hr style={{ borderColor: 'white', border: '1px white ridge' }} />
                            </div>
                            <br />
                            <img src={flashPromoImg} style={{ width: "100%", marginTop: "-20px" }} />
                            {/*
                        <object data="/flash/Objects/Arcade/pacman-flash.swf" width="375" height="240">
                            <param name="movie" value="/flash/Objects/urqell.swf" autostart="true" />
                            <p>Your browser does not support Flash.</p>
                        </object>
                        */}
                            <p>*All flash games belong to their respective owners and are <u>credited on their respective pages.</u></p>
                        </div>
                    )}

                    {activeTab === "opt2" && promo && (
                        <div id="opt2" className="tabcontent" style={{ paddingTop: '13px', paddingBottom: '40px' }}>
                            <div>{/*Video playback element*/}
                                <h1>{promo.headline}</h1>
                                <h3>{promo.description}</h3>

                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    {promo.videoUrl && <video
                                        controls
                                        autoPlay={false}
                                        loop={false}
                                        style={{ backgroundColor: '#57bcd5', width: '100%', height: 'auto', display: 'block', float:"left"}}
                                    >
                                        <source
                                            src={promo.videoUrl}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the HTML5 video tag.
                                    </video>}

                                    <img className="video-filmstrip-overlay"
                                        src="/src/assets/infosoosage/filmstrip-overlay-video.png"
                                        alt="Filmstrip overlay"
                                    />

                                    {promo.stats && (
                                        <div style={{
                                            float: "left",
                                            marginTop: "-46.5%",
                                            marginLeft: "71%",
                                            maxWidth: "180px",
                                            display: "block",
                                            overflow: "hidden",
                                        }}>
                                            <p><b>Views: </b>{promo.stats.views}</p>
                                            <p><b>Likes: </b>{promo.stats.likes}</p>
                                            <p><b>Dislikes: </b>{promo.stats.dislikes}</p>
                                            <hr />
                                        </div>
                                        )}

                                </div>
                            </div>
                        </div>

                    )}

                    {activeTab === "opt3" && (
                        <div id="opt3" className="tabcontent" style={{ paddingTop: '0px' }}>
                            <p><b>Music News</b></p>
                            <ul style={{ listStyle: "'•'" }}>
                                <li>?</li>
                                <li>?</li>
                                <li>BSO Director to Withdraw From 2006 Tour</li>
                            </ul>
                            <img src="/src/assets/infosoosage/content/music-png.png" style={{ maxWidth: '55%' }} />
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default FeaturedEntertainmentWidget;
