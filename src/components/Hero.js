import React from 'react';

export default function Hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          {/* <img src="energy.jpg" alt="conserve energy" /> */}
          <h1><center>Online Appointment booking for COVID-19 testing</center></h1>
            <div className="navbar-mid">
              <div className="navbar-item">
                <div className="buttons"></div>
                  <a href="/register" className="button is-light">
                    <strong>Register</strong>
                  </a>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}
