import React from 'react';
import LoginButtons from '../../components/buttons/LoginButtons/LoginButtons';
import IntroPage from '../../layouts/IntroPage/IntroPage';
import "./Login.css"

////////////////////////////////////////////////////////
/*Props and State*/
////////////////////////////////////////////////////////

interface Props {}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const Login: React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IntroPage>

      <div className="login_buttons">
        <LoginButtons signInURL="first-time"/>
      </div>

    </IntroPage>
  );
};

export default Login;