import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton, IonIcon, IonBadge, IonItem, IonToast } from "@ionic/react";
import { cart, logInOutline, personCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { getOrderStore, Order } from '../../../states/OrderStore/OrderStore';
import { getOrderSize } from '../../../logic/Maths/TotalOrderCalculator';
import OrderedToast from '../../ordir/OrderedToast/OrderedToast';
import { getUser } from '../../../firebase/Auth/Auth';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

let storedOrderSize : number = -1; 

interface Props {
  headerLabel : string
  isBack?     : boolean
  noCart?     : boolean
  noProfile?  : boolean
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

/**
 * Displays the Custom Header Component.
 * It also will display over the header detailing when a new item has been added.
 * @param props - headerLabel => header string; isBack => back button instead of hamburger; noCart => do not display cart button
 */
const HeaderWithMenu: React.FC<Props> = (props) => {
  
  ////////////////////////
  /*Variables*/
  ////////////////////////

  const message : string = "Your item has been successfully added to your cart.";

  //Props
  const headerLabel : string = props.headerLabel;
  const isBackButton : boolean = (props.isBack) ? (props.isBack) : (false);
  const isNoCart : boolean = (props.noCart) ? (props.noCart) : (false);
  const isNoProfile : boolean = (props.noProfile) ? (props.noProfile) : (false);

  //History Prop
  const history = useHistory();

  const headerColour : string = "primary"

  ////////////////////////
  /*Hooks*/
  ////////////////////////

  const [orderSize, setOrderSize] = useState(0);
  const [toastLoading, setToastLoading] = useState(false);

  //Calls on Start Up and order updates
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
            {
              (isNoCart)
              ? <></>
              : 
              <IonItem color={headerColour} lines="none">
                <IonIcon icon={cart} size="large" onClick={() => {
                  history.push("/bar/cart")
                }}/>
                <IonBadge color="secondary">{orderSize}</IonBadge>
              </IonItem>
            }
            {
              (!isNoProfile)
              ?
                (getUser() === null)
                ?
                  <IonItem color={headerColour} lines="none">
                    <IonIcon icon={logInOutline} size="large" onClick={() => {
                      history.push("/login")
                    }}/>
                  </IonItem>
                :  
                  <IonItem color={headerColour} lines="none">
                    <IonIcon icon={personCircleOutline} size="large" onClick={() => {
                      history.push("/account/profile")
                    }}/>
                  </IonItem>
              :
                <></>
            }
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <OrderedToast isShow={toastLoading} showingFunction={setToastLoading}/>
    </>
  );
};



export default HeaderWithMenu;