import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Get your test results</h4>
                            <p>No need of going to hospitals when you are sick as the hospital comes to you</p>
                            <center><img src="test-results@3x.png" alt="test-result" width="200"></img></center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Fast and accurate Lab Report</h4>
                            <p>Get your accurate lab reports and results faster than usual sitting at your home</p>
                            <center><img src="corona-test-report.png" alt="test-report" width="200"></img></center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Send your DNA sample</h4>
                            <p>Send your DNA sample from your home  at your convinience</p>
                            <center><img src="home-icon.png" alt="home" width="200"></img></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
