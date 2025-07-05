import SignupWidget from "/src/Widgets/infosoosage/signupWidget"
import LandingPageBlock from "/src/Widgets/infosoosage/templates/infosoosage_landingpageview"
import SearchPageBlock from "/src/Widgets/infosoosage/templates/infosoosage_searchpageview"
import React, { useState} from 'react';

function MainBlock({ activeTab }) {
  switch(activeTab){
    case "home":
    return(
        <LandingPageBlock/>
        );
    case "search":
    return(
        <SearchPageBlock/>
        );
        }

  
}export default MainBlock;
