import { IonContent, IonList } from '@ionic/react';
import React from 'react';
import { developerItems, loggedInItems, loggedOutItems, SideBarItem, sideBarItems } from './SideBarData';
import SideBarItemSingle from './SideBarItemSingle';
import {v4 as uuid} from 'uuid'

/**
 * Encapsulates the Rendering of all the Sidebar Items.
 */
const SideBarItems: React.FC = () => {

  return (
    <IonContent>
      <IonList>

        {/* Creates the Default SideBar Items through calling the renderMenuItem for each item in the sideBarItems array*/}
        {sideBarItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid()}/>)}
        
        {/* Logged In Items*/}
        {loggedInItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid()}/>)}

        {/* Logged Out Items*/}
        {loggedOutItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid()}/>)}

        {/* Developer Sidebar Items*/}
        {developerItems.map((currentItem: SideBarItem) => <SideBarItemSingle currentItem={currentItem} isDisabled={false} key={uuid()}/>)}


      </IonList>
    </IonContent>
  )
}

export default SideBarItems;