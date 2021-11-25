////////////////////////////////////////////////////////
/*Imports*/
////////////////////////////////////////////////////////

import { beer, build, business, card, cart, checkmark, checkmarkCircle, compass, home, logIn, people, peopleCircle, person, pizza } from 'ionicons/icons';

////////////////////////////////////////////////////////
/*Interfaces*/
////////////////////////////////////////////////////////

/**
 * The Interface used for containing the important data when constructing a SideBar Item.
 */
export interface SideBarItem {
  label : string,
  path : string,
  iconName : string
}

////////////////////////////////////////////////////////
/*SideBar Items*/
////////////////////////////////////////////////////////
  
/**
 * Main Sidebar Items
 */
export const sideBarItems : SideBarItem[]= [
  {label: "Home"              , path: "/home"           , iconName: home},
  {label: "Find Store"        , path: "/find/near-me"   , iconName: compass},
];

/**
 * Logged In Sidebar Items
 */
export const loggedInItems : SideBarItem[]= [
  {label: "My Account"         , path: "/account/profile", iconName: person},
];

/**
 * Logged Out Sidebar Items
 */
export const loggedOutItems : SideBarItem[]= [
  {label: "Login"             , path: "/login"          , iconName: logIn},
];

/**
 * Developer Sidebar Items
 */
export const developerItems : SideBarItem[]= [
  {label: "Welcome"           , path: "/welcome"        , iconName: peopleCircle},
  {label: "First Time"        , path: "/first-time"     , iconName: people},
  {label: "Bar Main"          , path: "/bar/main"       , iconName: business},
  {label: "Bar Drinks"        , path: "/bar/drinks"     , iconName: beer},
  {label: "Bar Foods"         , path: "/bar/foods"      , iconName: pizza},
  {label: "Bar Cart"          , path: "/bar/cart"       , iconName: cart},
  {label: "Bar Payment"       , path: "/bar/payment"    , iconName: card},
  {label: "Bar Options"       , path: "/bar/options"    , iconName: build},
  {label: "Bar Confirm"       , path: "/bar/confirm"    , iconName: checkmark},
  {label: "Bar Finished"      , path: "/bar/finished"   , iconName: checkmarkCircle},
];
