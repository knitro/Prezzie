import { IonFab, IonFabButton, IonIcon } from '@ionic/react';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

export interface Props {
  vertical    : "center" | "top" | "bottom",
  horizontal  : "center" | "start" | "end",
  icon?       : string,
  action      : () => void,
  color       : string,
  iconSize?   : "small" | "large"
};

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const FloatingActionButton : React.FC<Props>= (props : Props) => {

  ////////////////////////
  /*Constants*/
  ////////////////////////

  const fabSize : "small" | undefined = undefined // Undefined = large

  ////////////////////////
  /*Variables*/
  ////////////////////////

  //Props
  const vertical = props.vertical;
  const horizontal = props.horizontal;
  const icon = props.icon;
  const action = props.action;
  const color = props.color;
  const iconSize = (props.iconSize) ? props.iconSize : "small"

  ////////////////////////
  /*Return*/
  ////////////////////////
  
  return (
    <IonFab vertical={vertical} horizontal={horizontal} slot="fixed">
      <IonFabButton onClick={action} color={color} size={fabSize}>
        <IonIcon icon={icon} size={iconSize}/>
      </IonFabButton>
    </IonFab>
  );
}

export default FloatingActionButton;