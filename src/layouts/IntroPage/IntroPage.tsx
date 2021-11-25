import React from 'react';
import { IonContent, IonImg, IonPage } from '@ionic/react';
import "./Introduction.css"

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  children : React.ReactNode,
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const IntroPage: React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Variables
  ////////////////////////

  // Props
  const children = props.children

  // Constants
  const image : string = "/assets/logo/Prezzie-logos_white.png"

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IonPage>
      <IonContent className="ion-content.introPage_background">

        <div className="introduction_headerDiv">
          <IonImg src={image} />
        </div>
        
        {children}

      </IonContent>
    </IonPage> 
  );
};

export default IntroPage;