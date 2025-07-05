import SignupWidget from "/src/Widgets/infosoosage/signupWidget"
import React, { useEffect, useState } from 'react';
import mySoosagePromoImg from "/src/assets/infosoosage/icons/mysoosage-promo.png"
import rectanglePromo from "/src/assets/infosoosage/rectangle-promo.png"
import FeaturedEntertainmentWidget from "/src/Widgets/infosoosage/featuredEntertainmentWidget"
import MoreWidget from "/src/Widgets/infosoosage/moreWidget"
const opinionPollDefinitions = [
  "Super useful!",
  "Pretty useful",
  "It's alright",
  "It's neither here nor there",
  "It's not useful",
]

function LandingPageBlock() {
  const [opinionPolldata, setOpinionPoll] = useState(0);

function handleSubmit(e) {
  e.preventDefault();

  if (opinionPolldata == 0) {
    alert("Please provide a valid input!");
    return;
  }

  const message = {
    content: `New [poll0] submission: [kvp] - valueKey[${opinionPolldata}] - valueName[${opinionPollDefinitions[opinionPolldata-1]}]`
  };

  fetch("https://discord.com/api/webhooks/1389261012154319009/1joiB8D3nqXgj6lqJM3rjMxW20NqJ-U_cwJzDysta_8qJckrTcHKg9e9JQZEzau4oU51", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you for giving feedback to us!");
    } else {
      alert("Failed to send feedback.");
    }
  })
  .catch(() => {
    alert("Network error occurred.");
  });
}

  function onPollChange(e){
    setOpinionPoll(e.target.value);
  }
  return (
    <>
      <div className="center-row">
        <div className="center-column" style={{ width: "23%" }}>{/*Left*/}
          <SignupWidget />
          <br />
          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>INFOSOOSAGE OPINION POLL</p>
            </div>
            <div className="center-article-box-contentbox" style={{paddingLeft:"2%"}}>
            <form method="post" onSubmit={handleSubmit}>
            <div>
              <p>How useful is the InfoSoosage service to you?</p>
              <div> 
                <input type="radio" onChange={(e) => onPollChange(e)} className="opinionpoll"  id="0" name="op_poll" value="1" />
                <label htmlFor="0">{opinionPollDefinitions[0]}</label>
              </div>
              <div>
                <input type="radio" onChange={(e) => onPollChange(e)} className="opinionpoll"  id="1" name="op_poll" value="2" />
                <label htmlFor="1">{opinionPollDefinitions[1]}</label>
              </div>
              <div>
                <input type="radio" onChange={(e) => onPollChange(e)} className="opinionpoll"  id="2" name="op_poll" value="3"  />
                <label htmlFor="2">{opinionPollDefinitions[2]}</label>
              </div>
              <div>
                <input type="radio" onChange={(e) => onPollChange(e)} className="opinionpoll"  id="3" name="op_poll" value="4"  />
                <label htmlFor="3">{opinionPollDefinitions[3]}</label>
              </div>
              <div>
                <input type="radio" onChange={(e) => onPollChange(e)} className="opinionpoll"  id="4" name="op_poll" value="5"  />
                {opinionPolldata==5 ? <label htmlFor="4">I know here you live</label>:<label htmlFor="4">{opinionPollDefinitions[4]}</label>}
              </div>
            </div>
            <br/>
              <div style={{textAlign:"center"}}>
                <button style={{width:"90%"}} className="button-standard" type={"submit"}>SUBMIT</button>
              </div>
            </form>
            <hr style={{width:"80%"}}/>
              <p><i>This feature makes use of a remote Discord™ webhook in order to log poll data. Other than poll data you submit, your data is <u>not</u> logged nor gathered.</i></p>
              <br/>
            </div>
          </div>
          <br/>
          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>FEATURED WEBSITE</p>
              <img alt="Starred icon" src="/src/assets/infosoosage/icons/starred.png" style={{ float: "left", width: "50px", marginTop: "-52px", paddingLeft: "65%" }} />
            </div>
            <div className="center-article-box-contentbox">
              <a href="/pages/oracle/oraclechat.html" style={{textDecoration:"none", color:"black"}}><img src="/src/assets/nmcm/mini-promos/vibetrybe.gif"style={{width:"100%"}}/>
              <h3>VybeTrybe!</h3></a>
              <p>A place to share your creativity, interests and discuss trends. Sign up and start your journey for free! It's <b>the</b> social pitstop in the information superhighway.</p>
              <br/>
            </div>
          </div>
          <br />
          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>USEFUL LINK CENTRAL</p>
              <img alt="News Icon" src="/src/assets/infosoosage/icons/workspace.png" style={{ float: "left", width: "50px", marginTop: "-52px", paddingLeft: "65%" }} />
            </div>
            <div className="center-article-box-contentbox">
              <ul>{/*Should be refactored!*/}
                <li> <a href="#" >NMCMSoft home</a> </li>
                <li> <a href="#" >MyAbandonware</a> </li>
                <li> <a href="#" >WebDesignMuseum</a> </li>
              </ul>
            </div>
          </div>
          <br/>

        </div>
        <div className="center-column" style={{ width: "44.98%" }}>{/*Centre*/}
          <FeaturedEntertainmentWidget />

          <br />

          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>TOP SEARCHES ON INFOSOOSAGE</p>
              <img alt="News Icon" src="/src/assets/infosoosage/icons/searching.png" style={{ float: "left", width: "35px", marginTop: "-40px", paddingLeft: "45%" }} />
            </div>

            <div className="center-article-box-contentbox">
              <ul>
                <li>mysoosage login   </li>
                <li>vibe trybe   </li>
                <li>nmcmsoft games     </li>
                <li>tubeyube   </li>
                <li>what is an mp3?</li>
                <li>poker online        </li>
                <li>poopscape</li>
                <li>playstation 3 leaks</li>
                <li>soosagetube downloader   </li>
                <li>downhill bank login  </li>
              </ul>
              <div style={{ float: "left", marginTop: "-28%", marginLeft: "50%" }}>
                <img src={rectanglePromo} style={{ width: "115%" }} />
              </div>
            </div>
          </div>
          <br />

          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>GAMING NEWS</p>
              <img alt="News Icon" src="/src/assets/infosoosage/icons/sidewynder.png" style={{ float: "left", width: "8%", marginTop: "-50px", paddingLeft: "20%" }} />
            </div>

            <div className="center-article-box-contentbox">
              <h3>2K5 Gaming Recap</h3>
              <p>As we approach the end of 2005, the gaming landscape is thriving with innovation and creativity. <br/>Titles like "Resident Evil 4" and "Shadow of the Colossus" have captivated players, showcasing stunning graphics and immersive storytelling. The rise of online gaming continues to reshape how we connect and compete, while the industry grapples with debates over violence in games and their impact on youth. Overall, this year marks a significant evolution in gaming, blending entertainment with deeper narratives and social interaction.</p>
              <p>Hype in the gaming space this year wasn't limited by the amazing game videogame releases we've seen so far. The new Microsoft Xbox console buzz permeating this year has finally materialized. The gaming world is abuzz with excitement over the launch of the Xbox 360. Microsoft's next-generation console has set a new standard with its powerful hardware, stunning graphics, and an impressive lineup of launch titles, including "Perfect Dark Zero" and "Call of Duty 2." The introduction of Xbox Live Marketplace promises to revolutionize digital distribution, allowing players to download games, demos, and additional content seamlessly. With its sleek design and robust online capabilities, the Xbox 360 is poised to redefine the gaming experience and solidify Microsoft's position in the competitive console market.</p>
              <p>With this amazing year for gaming drawing to a close, we're left hopeful and curious about the releases of 2K6 - following the trend of post Y2K games, we're convinced it's not going to disappoint!</p>
              <hr/>
              <h3>A new PlayStation 3?</h3> 
              <p>As we sink all our time into the newly released Xbox 360, we're left wondering why Sony is lagging behind in the console wars. With the Xbox 360 hype being on the maximum level pretty much this whole year round, we haven't seen a shortage of speculations and mockups of the eventual PlayStation 3.</p>
              <p>From what we know by now, PlayStation 3 will be playable at E3 2006 - in one form or another. Based on the limited information extracted from our various sources (SONY developers on the down-low), we might not be able to get our hands on the console here in Europe by 2007, since SONY will launch it first in their primary market of Japan.</p>
              <p>We are expecting at least clunky half-finished tech demos sometime by spring 2006 which means that we don't even know what it might look like physically. That however, hasn't stopped various gaming journalist outlets taking an artistic gander at what the console might look like.</p>
              <p>Here are some of our favourites from planetps2.com:</p>
              <div style={{textAlign:"center"}}>
                <img src="/src/assets/infosoosage/content/ps3-mockups.png" style={{width:"75%"}}/>
              </div>
              <hr/>
              <img src="/src/assets/infosoosage/infosoosage-gaming-promo.png" style={{width:"100%"}}/>
            </div>
          </div>
          <br />
        </div>


        <div className="center-column" style={{ width: "29.98%" }}>{/*Right*/}


          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>SHAPE YOUR INFORMATION SUPERHIGHWAY</p>
            </div>
            <br />
            <div className="center-article-box-contentbox">
              <div className="center-article-box-titlebox" style={{ height: "0px" }}>
                <p style={{ fontSize: '13px', marginTop: "-25px" }}>WHAT IS INFOSOOSAGE?</p>
              </div>
              <p>InfoSoosage is your one-stop web-portal to the information-superhighway. Here you can find all relevant news, articles and updates on any niche you are interested in!</p>
              <p>From the main dashboard, you have access to the newest entertainment updates, new releases in the move industry and hot new gaming news & leaks.</p>
              <p>InfoSoosage also offers you a clutter free way to scour the internet through its new and improved clutter-free search engine, licensed out and powered by Google™.</p>
              <p>Just put in your search term on the top of the web-page and click "Scour the Web!" to dive head first into the information rich digital vastness of the internet.</p>
            </div>
            <br />
            <div className="center-article-box-contentbox">
              <div className="center-article-box-titlebox" style={{ height: "0px" }}>
                <p style={{ fontSize: '13px', marginTop: "-25px" }}>PERSONALIZED INFOSOOSAGE EXPERIENCE, MYSOOSAGE!</p>
              </div>
              <p>InfoSoosage Internet Networks offers a free personalized web-service to anyone!</p>
              <p>Want to customize your own dashboard with all of the conveniences of the InfoSoosage Web Portal?</p>
              <p>Head on over to MySoosage! - There you can customize your dashboard and create your own perfect home page with InfoSoosage's programmable Google search engine.</p>
              <p>Curate your own information, decide what you want to see. Create your own perfect home page that stays with your device persistently, now!</p>
              <a href="#">
                <img src={mySoosagePromoImg} />
                <p>Check it out now!</p>
              </a>
            </div>
            Advertisement:
            <br />
            <a id="nav-advert" href="#!">

            </a>
          </div>


          <br />


          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>➤ THIS JUST IN!</p>
              <img alt="News Icon" src="/src/assets/infosoosage/icons/news.png" style={{ float: "left", width: "50px", marginTop: "-52px", paddingLeft: "35%" }} />
            </div>
            <div className="center-article-box-contentbox">
              <ul>
              <li>Florida Man Arrested for Trying to Pay Toll with a Banana</li>
              <li>Swedish Town Declares War on Gnomes After Series of Garden Statue Mysteries</li>
              <li>Canadian Police Issue Warning About "Aggressively Friendly" Goose Named Karen</li>
              <li>Man Sues Airline After Being Seated Next to Crying Baby - Demands "Quiet Zone" Refund</li> 
              <li>Texas Town Elects Golden Retriever as Honorary Mayor for Third Straight Year</li>
              <li>UK Pub Bans Nachos After Cheese-Related Accidents Reach "Epidemic Levels"</li>  
              <li>Japanese Company Develops "Straight Face" App That Detects When You're About to Laugh in Meetings</li>
              <li>Australian Man Tries to Return Pet Emu to Walmart - Claims "It Grew Too Big"</li>
              <li>"World's Worst Hide-and-Seek Player" Found After 8 Hours - Was Behind Transparent Curtain</li>
              <li>New Jersey Pizza Delivery Driver Awarded "Best Excuse" After Blaming Late Delivery on Talking Squirrels</li>
            </ul>
            </div>
          </div>
          <br/>
          <div className="center-article-box-wrapper">
            <div className="center-article-box-titlebox">
              <p style={{ fontSize: '15px' }}>NEW IN INFOSOOSAGE SUITE - WHITE PAGES!</p>
            </div>

            <div className="center-article-box-contentbox">
              <p>Has someone killed you in Counter-Strike? Has someone angered you over the internet that you want to smash their skull in but you don't know how to track them down?</p>
              <p>Look no further than the <b>InfoSoosage</b> White Pages service!</p>
              <p>We offer the most easy-to-use subscription based white page based service!</p>
              <p>Your satisfaction is what we aim for.</p>
            </div>
          </div>
        </div>
        
      </div>
    <hr/>


    </>
  );
} export default LandingPageBlock;