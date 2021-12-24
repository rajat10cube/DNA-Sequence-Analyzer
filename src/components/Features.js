import React, { Component, Fragment } from 'react';
import axios from "axios";
const config = require('../config.json');

export default class Features extends Component {

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Prototype :</h1>
            <p className="subtitle is-5"><a target='_blank' href="https://marvelapp.com/prototype/d1fb80i/screen/83296921" >https://marvelapp.com/prototype/d1fb80i/screen/83296921</a></p>
            <br />
            <h1>PPT :</h1>
            <p className="subtitle is-5"><a target='_blank' href="https://nyu0-my.sharepoint.com/:p:/g/personal/rrr9293_nyu_edu/EfTARFHHma9NqjvMoaTpgMwBwwDFOhDtd49BUN6_UBWb1Q?e=rOd8oH">https://nyu0-my.sharepoint.com/:p:/g/personal/rrr9293_nyu_edu/EfTARFHHma9NqjvMoaTpgMwBwwDFOhDtd49BUN6_UBWb1Q?e=rOd8oH</a></p>
            <br />
            <h1>MVP Video-1 Mobile Application :</h1>
            <p className="subtitle is-5">Here we show the functionality of integrating WhatsApp API with our application deployed over cloud. Application gives the end user capability to book an appointment by scanning a unique QR code for his COVID-19 testing, by sending his location, authentication, valid identity card and other essential credentials. End-to-end interaction between the chat bot and the user has been demonstrated. The information collected goes to the cloud management console.</p>
            <p className="subtitle is-5"><a target='_blank' href="https://nyu0-my.sharepoint.com/:p:/g/personal/rrr9293_nyu_edu/EfTARFHHma9NqjvMoaTpgMwBwwDFOhDtd49BUN6_UBWb1Q?e=rOd8oH">https://nyu0-my.sharepoint.com/:p:/g/personal/rrr9293_nyu_edu/EfTARFHHma9NqjvMoaTpgMwBwwDFOhDtd49BUN6_UBWb1Q?e=rOd8oH</a></p>
            <br />
            <h1>MVP Video-2 Web Application</h1>
            <p className="subtitle is-5">Here we demonstrate the overall flow of the web application. In this video, the Amplify application of the project has been shown. Interaction like login, sign-up and user authentication via email has also been documented.</p>

            <p className="subtitle is-5"><a target='_blank' href="https://drive.google.com/file/d/1vM6KcrBrIfvvfOULk5vwrtqwUIEF_ONR/view?usp=sharing">https://drive.google.com/file/d/1vM6KcrBrIfvvfOULk5vwrtqwUIEF_ONR/view?usp=sharing</a></p>
            {/* <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    <div className="tile notification is-warning">MVP Video-1 Mobile Application</div>

                  </div>
                  <div className="tile is-8 is-parent  is-vertical">
                    <div className="tile notification is-warning">Here we show the functionality of integrating WhatsApp API with our application deployed over cloud. Application gives the end user capability to book an appointment by scanning a unique QR code for his COVID-19 testing, by sending his location, authentication, valid identity card and other essential credentials. End-to-end interaction between the chat bot and the user has been demonstrated. The information collected goes to the cloud management console.</div>
                  </div>
                </div>
                <a target='_blank' href="https://drive.google.com/file/d/1Xas6SHjdMIfGpHJiL7MsHlFUAi6hzfX4/view?usp=sharing" >https://drive.google.com/file/d/1Xas6SHjdMIfGpHJiL7MsHlFUAi6hzfX4/view?usp=sharing</a>
              </div>
          </div> */}
          </div>
        </section>
      </Fragment >
    )
  }
}
