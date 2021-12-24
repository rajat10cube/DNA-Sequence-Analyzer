import React, { Component, Fragment } from 'react';
import Features from './Features';
import axios from "axios";
const config = require('../config.json');

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>About Us :</h1>
            <p className="subtitle is-5">This project is an attempt to create appointment booking system using DNA genome sequence analysis. It is called as the ForwardHealth Care System. The following project is completed under the guidance of professor Sambit Sahu in the Special Topics in Computer Science class - Cloud Computing/ CS-GY 9223 in Fall-2021 semester.</p>
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    <div className="tile notification is-warning">
                      Team :<br></br>
                      Rajat Raghuwanshi - rrr9293<br></br>

                      Rushabh Gandhi (rrg4715)<br></br>

                      Vaibhav Jain (vj2075)<br></br>

                      Sidharth Purohit (sp6365)<br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment >
    )
  }

}
