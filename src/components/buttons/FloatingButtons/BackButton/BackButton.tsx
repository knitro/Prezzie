import FloatingActionButton from '../FloatingActionButton';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { LinkToHome } from '../../../../logic/links/Links';

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

export interface Props {
  backButtonHome? : boolean
};

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const BackButton = (props : Props) => {

  ////////////////////////
  /*Variables*/
  ////////////////////////

  // Props
  const backButtonHome : boolean = (props.backButtonHome) ? props.backButtonHome : false

  // History Prop
  let history = useHistory();
  
  ////////////////////////
  /*Return*/
  ////////////////////////

  return (
    <>
      {
        (backButtonHome)
        ? <FloatingActionButton
            vertical="top"
            horizontal="start"
            icon={arrowBack}
            action={() => LinkToHome()}
            color="primary"
          />
        : <FloatingActionButton
            vertical="top"
            horizontal="start"
            icon={arrowBack}
            action={() => history.goBack()}
            color="primary"
          />
      }
    </>
  );

}

export default BackButton;