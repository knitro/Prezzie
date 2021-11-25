import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { TabInfo } from './TabInfo';
import { v4 } from 'uuid';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  tabs : TabInfo[]
  currentPage : string
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FooterTabs = (props : Props) => {

  ////////////////////////
  /*Variables*/
  ////////////////////////

  const tabs : TabInfo[] = props.tabs;

  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <IonTabBar slot="bottom" translucent /*selectedTab={currentPage}*/>
      {
        tabs.map((currentTab : TabInfo) => 
          <IonTabButton key={v4()} tab={currentTab.label} 
            href={currentTab.link}
            // onClick={() => History.push(currentTab.link)}
          >
            <IonIcon icon={currentTab.icon} />
            <IonLabel>{currentTab.label}</IonLabel>
          </IonTabButton>
        )
      }

    </IonTabBar>
  );
};

export default FooterTabs;