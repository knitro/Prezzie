import React from 'react';
import { star, home, beer, pizza, informationCircleOutline } from 'ionicons/icons';
import { TabInfo } from '../TabInfo'
import FooterTabs from '../FooterTabs';
import { SHOW_SPECIALS } from '../../../../logic/Defaults/Defaults';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  currentPage : string
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FooterTabsStore = (props : Props) => {

  ////////////////////////
  /*Variables*/
  ////////////////////////

  //Constants
  const tabs : TabInfo[] = [
    {label: "Home"      , icon: home                      , link: "/bar/main"},
    {label: "Specials"  , icon: star                      , link: "/bar/specials"},
    {label: "Foods"     , icon: pizza                     , link: "/bar/foods"},
    {label: "Drinks"    , icon: beer                      , link: "/bar/drinks"},
    {label: "Venue"     , icon: informationCircleOutline  , link: "/bar/venue"},
  ]

  const tabsNoSpecials : TabInfo[] = [
    {label: "Home"      , icon: home                      , link: "/bar/main"},
    {label: "Foods"     , icon: pizza                     , link: "/bar/foods"},
    {label: "Drinks"    , icon: beer                      , link: "/bar/drinks"},
    {label: "Venue"     , icon: informationCircleOutline  , link: "/bar/venue"},
  ]


  //Props
  const currentPage = props.currentPage

  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    (SHOW_SPECIALS)
    ? <FooterTabs tabs={tabs} currentPage={currentPage}/>
    : <FooterTabs tabs={tabsNoSpecials} currentPage={currentPage}/>
  );
};

export default FooterTabsStore;