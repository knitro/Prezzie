import React, { useEffect, useState } from 'react';
import { getOrderStore, Order } from '../../../../states/OrderStore/OrderStore';
import { getOrderSize } from '../../../../logic/Maths/TotalOrderCalculator';
import BackButton from '../../../buttons/FloatingButtons/BackButton/BackButton';
import CartButton from '../../../buttons/FloatingButtons/CartButton/CartButton';
import SearchButton from '../../../buttons/FloatingButtons/SearchButton/SearchButton';
import LoginProfileButton from '../../../buttons/FloatingButtons/LoginProfileButton/LoginProfileButton';
import OrderedToast from '../../../ordir/OrderedToast/OrderedToast';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

let storedOrderSize : number = -1; 

interface Props {
  style : "backAndCart" | "searchAndProfile" | "backOnly"
  backButtonHome? : boolean
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FloatingHeader: React.FC<Props> = (props) => {
  
  ////////////////////////
  /*Variables*/
  ////////////////////////

  // Props
  const style = props.style
  const backButtonHome = props.backButtonHome

  ////////////////////////
  /*Hooks*/
  ////////////////////////

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
      {
        (style === "backAndCart")
        ? <>
            <BackButton backButtonHome={backButtonHome}/>
            <CartButton/>
          </>
        : (style === "searchAndProfile")
        ? <>
            <SearchButton isFAB/>
            <LoginProfileButton/>
          </>
        : (style === "backOnly")
        ? <>
            <BackButton backButtonHome={backButtonHome}/>
          </>
        : <></>
      }

      <OrderedToast isShow={toastLoading} showingFunction={setToastLoading}/>
    </>
  );
};



export default FloatingHeader;