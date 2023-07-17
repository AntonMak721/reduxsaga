 import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, addUsers } from "../store/userReducer";


    const fetchUsersFromApi =()=>fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
   
 function* fetchUserWorkerWatcher() {
    const data =  yield  call(fetchUsersFromApi)
    const json =  yield call( ()=> new Promise (res =>res (data.json())))
    yield put(addUsers(json))


 }

 export function* userWatcher(){
    yield takeEvery(FETCH_USERS, fetchUserWorkerWatcher)
}