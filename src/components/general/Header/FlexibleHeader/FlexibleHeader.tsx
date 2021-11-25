import React, { useState } from 'react';
import { CreateAnimation, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import Header from '../Header';
import { arrowBack, cart, home, logInOutline, personCircleOutline, search } from 'ionicons/icons';
import { addToFABUpdater, addToTopLeftButtonUpdater, getSettingFabSize, getSettingTopLeftButton } from '../../../../states/Settings/SettingsState';
import { LinkToHome, LinkToLogin, LinkToProfile, LinkToCart, LinkBack } from '../../../../logic/Links/Links';
import auth, { isLoggedIn } from '../../../../firebase/Auth/Auth';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {
  style : "backAndCart" | "searchAndProfile" | "backOnly"
  atTop : boolean
  headerLabel? : string
  backButtonHome? : boolean // Determines if the "back arrow button" should go back to the home page, or back a page.
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FlexibleHeader: React.FC<Props> = (props) => {
  
  ////////////////////////
  /*Variables*/
  ////////////////////////

  // Props
  const style = props.style
  const atTop = props.atTop
  const headerLabel = props.headerLabel
  const backButtonHome = props.backButtonHome
  
  ////////////////////////
  /*Hooks*/
  ////////////////////////

  // Settings
  const [size, setSize] = useState<"small" | undefined>(getSettingFabSize() == "large" ? undefined : "small")
  const [leftIconSetting, setLeftIconSetting] = useState<"home" | "search">(getSettingTopLeftButton())
  
  // Left Icon
  const [leftIcon, setLeftIcon] = useState<string>((style === "backAndCart") ? arrowBack : (leftIconSetting === "home") ? home : search)

  // Right Icon
  const [rightIcon, setRightIcon] = useState((style === "backAndCart") ? cart : logInOutline)

  ////////////////////////
  /*Functions*/
  ////////////////////////

  const leftIconFunction = () => {
    if (style === "searchAndProfile") {
      if (leftIconSetting === "home") {
        LinkToHome()
      } else {
        console.log("Search Button Pressed") // TODO:: This needs to be the search function + some implementation of a floating search bar
      }
    } else {
      LinkBack()
    }
  }

  const rightIconFunction = () => {
    if (style === "backAndCart") {
      LinkToCart()
    } else {
      if (isLoggedIn() !== null) {
        LinkToProfile()
      } else {
        LinkToLogin()
      }
    }
    
  }

  const setSizeFunction = (a: "small" | undefined) => {
    console.log("Updating")
    setSize(a)
  }
  addToFABUpdater(setSizeFunction)

  const setTopLeftIconListener = (a: "home" | "search") => {
    console.log("Top Left Listener Activated")
    if (style === "searchAndProfile") {
      if (a === "home") {
        setLeftIcon(home)
      } else {
        setLeftIcon(search)
      }
    } else {
      setLeftIcon(arrowBack)
    }
  }
  addToTopLeftButtonUpdater(setTopLeftIconListener)

  auth.onAuthStateChanged(function(user) {
    if (style === "searchAndProfile") {
      if (user) {
        setRightIcon(personCircleOutline)
      } else {
        setRightIcon(logInOutline)
      }
    }

    // Update Left Icon as well to try avoid "blank circle"
    if (style === "backAndCart") {
      setLeftIcon(arrowBack)
    } else if (leftIconSetting === "home") {
      setLeftIcon(home)
    } else {
      setLeftIcon(search)
    }
  });
  
  ////////////////////////
  /*Return*/
  ////////////////////////

  // Note that the FAB Custom Components cannot be used with the CreateAnimation

  return (
    <>
      <Header style={style} headerLabel={headerLabel} topLeftIcon={leftIconSetting} backButtonHome={backButtonHome} />
      {
        (!atTop)
        ? <>
            <CreateAnimation
              duration={100}
              iterations={1}
              keyframes={[
                { offset: 0,   transform: 'scale(-0%)',  opacity: '0' },
              ]}
              afterStyles={{opacity: 100, scale:100}}
              easing="ease-in"
              play={true}
            >
              <IonFab vertical="top" horizontal="start" slot="fixed">
                <IonFabButton color={"primary"} size={size} onClick={() => {leftIconFunction()}}>
                  <IonIcon icon={leftIcon} />
                </IonFabButton>
              </IonFab>
            </CreateAnimation>

            <CreateAnimation
              duration={100}
              iterations={1}
              keyframes={[
                { offset: 0,   transform: 'scale(-0%)',  opacity: '0' },
              ]}
              afterStyles={{opacity: 100, scale:100}}
              easing="ease-in"
              play={true}
            >
              <IonFab vertical="top" horizontal="end" slot="fixed">
                <IonFabButton color={"primary"} size={size} onClick={() => {rightIconFunction()}}>
                  <IonIcon icon={rightIcon} size="large"/>
                </IonFabButton>
              </IonFab>
            </CreateAnimation>
          </>
        : <></>
      }
    </>
  );
};

export default FlexibleHeader;