import React from 'react'

export default function HomeContent() {
  return (
    <section className="container qrcontainer">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <center><img src="medical-report.png" alt="test-result" width="200"></img></center>
                            <center className="qrcontainer"><a href="/sendreport" className="button is-primary">Prepare and Send Report</a></center>
                            <center><p>Prepare and send final reports to patients</p></center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <center><img src="patient.png" alt="test-report" width="200"></img></center>
                            <center className="qrcontainer"><a href="/listpatients" className="button is-primary">List Patients</a></center>
                            <center><p>List all the patients registered with our service</p></center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <center><img src="doctor.png" alt="home" width="200"></img></center>
                            <center className="qrcontainer"><a href="/listusers" className="button is-primary">List Lab Assistants</a></center>
                            <center><p>List all lab assistants registered with our service</p></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
