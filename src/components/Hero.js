import React from 'react';
import { Auth } from 'aws-amplify';

export default function Hero(props) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          {/* <img src="energy.jpg" alt="conserve energy" /> */}
          <h1><center>Online Appointment booking for COVID-19 testing</center></h1>
          <p className="has-text-centered">
          {/* <span className="tag is-primary">New</span> */}
          DNA sample collection, and report delivery mechanism
          </p>
          {!props.auth.isAuthenticated && (
            <center className="qrcontainer">
            <div>
              <a href="/register" className="button is-light">
                <strong>Register</strong>
              </a>
            </div>
            </center>
            )}
        </div>
      </div>
    </section>
  )
}
