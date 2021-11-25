import React, { useState } from 'react';
import { CreateAnimation, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react';
import ShowMoreLess from '../../ShowMoreLess/ShowMoreLess';

////////////////////////////////////////////////////////
/*Props for CardHeader*/
////////////////////////////////////////////////////////

interface Props {
  title     : string | null | undefined,
  children  : React.ReactNode
  subtitle? : string,
  inverted? : boolean,
  color?    : string,
}

////////////////////////////////////////////////////////
/*CardHeader*/
////////////////////////////////////////////////////////

const CardOpen: React.FC<Props> = (props : Props) => {

  //////////////////////////////
  /*Variables*/
  //////////////////////////////

  const title       : string  = (props.title)     ? (props.title)     : "Unknown";
  const subtitle    : string  = (props.subtitle)  ? (props.subtitle)  : "";
  const isInverted  : boolean = (props.inverted)  ? (props.inverted)  : false;
  const color       : string  = (props.color)     ? props.color       : "secondary";

  ////////////////////////
  /*Hooks*/
  ////////////////////////
  
  //Filter Hooks
  const [filterShow, setFilterShow] = useState(false);

  ////////////////////////
  /*Function*/
  ////////////////////////

  const pressCardFunction = async () => {
    setFilterShow(!filterShow)
  }

  //////////////////////////////
  /*Return*/
  //////////////////////////////

  return (
    <IonCard>
      <IonCardHeader color={color} onClick={async() => await pressCardFunction()}>
        {
          (isInverted)
          ? <>
            <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            <IonCardTitle>'
              <IonText>{title}</IonText>
              <ShowMoreLess isShow={filterShow}/>
            </IonCardTitle>
            </>
          : <>
              <IonCardTitle>
                <IonText>{title}</IonText>
                <ShowMoreLess isShow={filterShow}/>
              </IonCardTitle>
              <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </>
        }
      </IonCardHeader>
      {
        filterShow
        ? <>
            <CreateAnimation
              duration={100}
              iterations={1}
              keyframes={[
                { offset: 0,   transform: 'translateY(-10px)',  opacity: '0' },
              ]}
              easing="ease-in"
              play={filterShow}
            >
              {/* <IonCardContent> */}
              <div>
                {props.children}
              </div>
              {/* </IonCardContent> */}
            </CreateAnimation>
          </> 
        : <></>
      }
    </IonCard>
  )

}

export default CardOpen;
