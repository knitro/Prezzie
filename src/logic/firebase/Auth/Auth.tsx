import { User, getAuth, signOut } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import firebaseApp from "../firebase";

////////////////////////////////////////////////////////
/*Initialisation*/
////////////////////////////////////////////////////////

const auth = getAuth(firebaseApp)

export default auth;

////////////////////////////////////////////////////////
/*Functions*/
////////////////////////////////////////////////////////

/**
 * Returns the current Time+Date
 * @returns the Date
 */
export function getDate() : Timestamp {
  return Timestamp.now()
} 

/**
 * Returns the Current Logged in User.
 * @returns the user, or null if there is no logged in user.
 */
export function getUser() : User | null {
  return auth.currentUser
} 

/**
 * Returns a boolean whether the user is logged in or not.
 * This check is auth.currentUser === null.
 * @returns true if there is a user logged in, otherwise false.
 */
export function isLoggedIn() : boolean {
  return (auth.currentUser === null)
}

/**
 * Signs out the current user from Firebase Authentication.
 * @returns 
 */
export async function doSignOut() : Promise<void> {
  signOut(auth).then( () => {
    return;
  }).catch( (error) => {
    console.log(error)
    return;
  });
}