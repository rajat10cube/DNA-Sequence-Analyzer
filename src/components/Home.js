import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';
import LabContent from './LabContent';

export default function Home(props) {
  return (
    <Fragment>
      {props.auth.isAuthenticated && (
        <LabContent/>
      )}
      {!props.auth.isAuthenticated && (
        <div>
      <Hero auth={props.auth} />
      <div className="box cta">
          <center><img src="ForwardHealthTech.png" width="400"/></center>
          <center><h3>Scan the above QR code to send message from whatsapp</h3></center>
      </div>
      <HomeContent />
      </div>)}
    </Fragment>
  )
}
