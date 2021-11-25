import React from 'react';
import { home, compass, receipt, person } from 'ionicons/icons';
import { TabInfo } from '../TabInfo'
import FooterTabs from '../FooterTabs';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  currentPage : string
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FooterTabsFind = (props : Props) => {

  ////////////////////////
  /*Variables*/
  ////////////////////////
  
  //Constants
  const tabs : TabInfo[] = [
    {label: "Home"      , icon: home        , link: "/home"},
    {label: "Find"      , icon: compass     , link: "/find"},
    {label: "Orders"    , icon: receipt     , link: "/account/orders"},
    {label: "Profile"   , icon: person      , link: "/account/profile"},
  ]

  //Props
  const currentPage = props.currentPage
  
  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <FooterTabs tabs={tabs} currentPage={currentPage}/>
  );
};

export default FooterTabsFind;