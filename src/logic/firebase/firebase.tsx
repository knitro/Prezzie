import { FirebaseApp, initializeApp } from "firebase/app"
import { firebaseConfig } from "../../apikeys/keys";

////////////////////////////////////////////////////////
/*Initialisation*/
////////////////////////////////////////////////////////

const firebaseApp : FirebaseApp = initializeApp(firebaseConfig);

export default firebaseApp