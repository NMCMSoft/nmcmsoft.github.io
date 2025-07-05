import React from "react";

function HeaderRenderer({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
    return (
        <>
            <div className="topbar">
                <img style={{ float: "left" }} src="/src/assets/infosoosage/headerimg.png" />

                <div className="search-bar">
                    <img src="/src/assets/infosoosage/bgbox.png" />
                    <p>Search:</p>
                    <form action="https://www.google.com/search" method="get">
                        <input
                            className="search-bar-bar"
                            type="text"
                            id="query"
                            name="q"
                            placeholder="Input your search here!"
                            required
                        />
                        <input
                            className="search-bar-confirm"
                            type="submit"
                            value="Scour the Web!"
                            
                        />
                    </form>

                    <div>
                        <u>Tip:</u> Check your spelling? Good spelling means better searches.
                        <br />
                        <u>Tip:</u>The more specific, the better.
                    </div>

                    <img className="poweredby-img" src="/src/assets/infosoosage/icons/poweredby.png" />
                    <img
                        style={{
                            maxWidth: "40px",
                            maxHeight: "40px",
                            marginLeft: "-40px",
                        }}
                        src="/src/assets/infosoosage/icons/searching.png"
                    />
                </div>
            </div>

            <div className="topbar-topmenu">
                <ul>
                    <li className="navbar-hor-override" id="navbar-horizontal">
                        <a onClick={() => handleTabClick("home")} id= {activeTab==="home"?"navbar-horizontal-current":""}>INFO SOOSAGE NETWORK</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a id= {activeTab==="search"?"navbar-horizontal-current":""} onClick={() => handleTabClick("search")}>Search</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a id= {activeTab==="cinema"?"navbar-horizontal-current":""} onClick={() => handleTabClick("cinema")}>Cinema</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#news">News</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#contact">Entertainment</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#about">Music</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#about">Photos</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#about">Blogs</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#about">Videogames</a>
                    </li>
                    <li id="navbar-horizontal">
                        <a href="#about">Ringtones</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HeaderRenderer;


