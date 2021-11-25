import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonIcon, IonBadge, IonItem, IonButton } from "@ionic/react";
import { arrowBackOutline, cart, logInOutline, personCircleOutline } from 'ionicons/icons';
import { getOrderStore, Order } from '../../../states/OrderStore/OrderStore';
import { getOrderSize } from '../../../logic/Maths/TotalOrderCalculator';
import SearchButton from '../../buttons/FloatingButtons/SearchButton/SearchButton';
import HomeButton from '../../buttons/FloatingButtons/HomeButton/HomeButton';
import { LinkToCart, LinkToHome, LinkToLogin, LinkToProfile } from '../../../logic/Links/Links';
import OrderedToast from '../../ordir/OrderedToast/OrderedToast';
import auth from '../../../firebase/Auth/Auth';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

let storedOrderSize : number = -1; 

interface Props {
  style : "backAndCart" | "searchAndProfile" | "backOnly"
  headerLabel? : string
  topLeftIcon? : "home" | "search"
  backButtonHome? : boolean
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
  /*Variables*/
  ////////////////////////

  // Props
  const style = props.style
  const headerLabel : string  = (props.headerLabel) ? props.headerLabel : ("Ordir");
  const topLeftIcon = props.topLeftIcon
  const backButtonHome : boolean = (props.backButtonHome) ? props.backButtonHome : false 

  const headerColour : string = "primary"

  ////////////////////////
  /*Hooks*/
  ////////////////////////

  // State Hooks
  const [orderSize,     setOrderSize]     = useState(0);
  const [toastLoading,  setToastLoading]  = useState(false);
  const [isLoggedIn,    setLoggedIn]      = useState(false);

  // Calls on Start Up and updates from the order size
  useEffect(() => {

    function handleLoadedOrder(current : Order) {
      const newOrderSize : number = getOrderSize(current);

      if (newOrderSize > storedOrderSize) {
        if (storedOrderSize !== -1) {
          setToastLoading(true);
        }
      }
      storedOrderSize = newOrderSize;
      setOrderSize(newOrderSize);
    }

    getOrderStore().then( (current : Order) =>
      handleLoadedOrder(current)
    );

    return function cleanup() {}
  });

  auth.onAuthStateChanged(function(user) {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  });
  
  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <>
      <IonHeader>
        <IonToolbar color={headerColour}>
          {
            (style === "backAndCart")
            ? <> 
                <IonItem color={headerColour} lines="none" slot="start" >
                  {
                    (backButtonHome)
                    ? <IonButton onClick={() => LinkToHome()}>
                        <IonIcon icon={arrowBackOutline}/>
                      </IonButton>
                    : <IonBackButton defaultHref="/home"/>
                  }
                </IonItem>
                <IonTitle>{headerLabel}</IonTitle>
                <IonItem color={headerColour} lines="none" slot="end">
                  <IonIcon icon={cart} size="large" onClick={() => LinkToCart()}/>
                  <IonBadge color="secondary">{orderSize}</IonBadge>
                </IonItem>
              </>

            : (style === "searchAndProfile")
            ? <>
                <IonButtons slot="start">
                  {
                    (topLeftIcon === "home")
                    ? <HomeButton isFAB={false}/>
                    : <SearchButton isFAB={false}/>
                  }
                </IonButtons>
                <IonTitle>{headerLabel}</IonTitle>
                <IonButtons slot="end">
                  {
                    <IonItem color={headerColour} lines="none">
                      <IonIcon icon={(isLoggedIn) ? personCircleOutline : logInOutline} size="large" 
                        onClick={() => {
                          if (isLoggedIn) { LinkToProfile() } 
                          else { LinkToLogin() }
                        }}
                      />
                    </IonItem>
                  }
                </IonButtons>
              </>

            : (style === "backOnly")
            ? <>
                <IonItem color={headerColour} lines="none" slot="start" >
                  <IonBackButton defaultHref="/home"/>
                </IonItem>
                <IonTitle>{headerLabel}</IonTitle>
              </>
            : <></>
          }
        </IonToolbar>
      </IonHeader>


      <OrderedToast isShow={toastLoading} showingFunction={setToastLoading}/>
    </>
  );
};



export default Header;