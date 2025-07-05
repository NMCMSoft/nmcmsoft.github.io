import React from "react";

function FooterRenderer() {
    return (
        <>
            <div className="bottombar">
                <div className="btm-info">
                    <div>
                        Websites in the INFO SOOSAGE™ network: 
                        <a href="#"><i>MySoosage</i></a>
                        <a href="#"><i>InterSoosage</i></a>
                        <a href="#"><i>SHOOFLE</i></a>
                        <a href="#"><i>[NEWLY ACQUIRED]ALEPH Arcade</i></a>
                    </div>
                </div>
                <div className="btm-options">
                    <ul style={{ marginTop: "-30px" }}>
                        <li className="btm-options-ul"><a href="#home">About Us</a></li>
                        <li className="btm-options-ul"><a href="#home">Terms of Service</a></li>
                        <li className="btm-options-ul"><a href="#home">Jobs</a></li>
                        <li className="btm-options-ul"><a href="#home">InfoSoosage™ Adverts!</a></li>
                        <li className="btm-options-ul"><a href="#home">Help</a></li>
                    </ul>
                    <p style={{ textAlign: "right", marginTop: "-40px" }}>
                        Copyright 2005 © InfoSoosage™ Incorporated. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
}export default FooterRenderer;
