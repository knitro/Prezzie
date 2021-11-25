import React from 'react';
import { IonButton, IonLabel } from '@ionic/react';
import "./Welcome.css"
import IntroPage from '../../layouts/IntroPage/IntroPage';
import { LinkToLogin } from '../../logic/links/Links';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const Welcome: React.FC = (props : Props) => {
  
  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IntroPage>

      <div className="welcomeGetStarted">

        <IonButton expand="block" size="large" color="light" shape="round"
          onClick={LinkToLogin}
        >
          <IonLabel>Get Started</IonLabel>
        </IonButton>

      </div>

    </IntroPage>
  );
};

export default Welcome;