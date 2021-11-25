import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenu, IonItem, IonIcon } from "@ionic/react";
import { fastFoodOutline } from 'ionicons/icons';
import SideBarItems from './SideBarItems';

/**
 * Component that creates the SideBar for the Application.
 */
const SideBar : React.FC = () => {

  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <IonMenu side="start" type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonItem color="primary">
            <IonIcon icon={fastFoodOutline} slot="start" size="large"/>
            <IonTitle>{"Ordir"}</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      
      {/*Render SideBar Items*/}
      <SideBarItems />

    </IonMenu>
  );
}

export default SideBar;