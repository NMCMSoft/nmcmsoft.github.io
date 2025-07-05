export default function SignupWidget(){
    return(
        <>
            <div className="center-article-box-wrapper">
              <div className="center-article-box-titlebox" style={{paddingBottom:"10px"}}>
                <p>SIGN UP FOR OUR E-SUITE OF <br/> CHEAP SERVICES!</p>
              </div>
              <br />
              <div className="center-article-box-contentbox">
                <img style={{width:"100%" }}src="/src/assets/infosoosage/content/signupservice.png" alt="Sign Up Service" />
                <div>
                  <img
                    style={{ width: '100%', height: '20px' }}
                    src="/src/assets/infosoosage/mid-article-break.png"
                    alt="Mid Article Break"
                  />
                  <p style={{ color: 'white', marginTop: '-20px' }}>
                    <u>Highest standard mail service!</u>
                  </p>
                  Sign up now and enjoy some of
                  <br /> our premium perks:
                  <ul>
                    <li>
                      Premium electronic mail <br /> service
                    </li>
                    <li>
                      4 storage CDs in your
                      <br /> mail a month!
                    </li>
                    <li>
                      Custom @soosage.com mail <br />
                      domain!
                    </li>
                    <li>
                      <u>BRAND NEW</u> 256MB <br />
                      accessible on-line storage
                      <br />available at any time!
                    </li>
                  </ul>

                  <div style={{textAlign:"center"}}>
                      <button className="button-standard" style={{width:"90%"}}>
                        SIGN UP NOW!
                      </button>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
        </>
    );
}