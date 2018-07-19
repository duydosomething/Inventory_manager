import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dbUsersReducer from "./dbUsersReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  users: dbUsersReducer,
  form: formReducer
});
