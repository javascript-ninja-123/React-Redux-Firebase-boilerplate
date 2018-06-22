import {
  SIGN_UP
} from './type';
import FirebaseCenter from '../util/firebase-database';
const db = new FirebaseCenter();


export const signup = obj => async dispatch => {
    await db.addData(obj)
    console.log('worked')
    dispatch({
      type:SIGN_UP,
      payload:obj
    })
}
