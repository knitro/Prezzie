import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton } from "@ionic/react";

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  headerLabel : string
  isBack?     : boolean
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

/**
 * Displays the Custom Header Component.
 * It also will display over the header detailing when a new item has been added.
 * @param props - headerLabel => header string; isBack => back button instead of hamburger; noCart => do not display cart button
 */
const Header: React.FC<Props> = (props) => {

  ////////////////////////
  /*Constants*/
  ////////////////////////

  const headerColour : string = "primary"

  ////////////////////////
  /*Variables*/
  ////////////////////////

  // Props
  const headerLabel : string = props.headerLabel;
  const isBackButton : boolean = (props.isBack) ? (props.isBack) : (false);

  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <>
      <IonHeader>
        <IonToolbar color={headerColour}>

          <IonButtons slot="start">
            {
              (isBackButton)
              ? <IonBackButton defaultHref="/home" />
              : <IonMenuButton autoHide={false}/>
            }
          </IonButtons>
          
          <IonTitle size="large">{headerLabel}</IonTitle>
          
          <IonButtons slot="end">
            {/** Nothing Yet*/}
          </IonButtons>

        </IonToolbar>
      </IonHeader>
    </>
  );
};



export default Header;