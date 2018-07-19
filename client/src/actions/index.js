import axios from "axios";
import { FETCH_USER, FETCH_DB_USERS, ADD_NEW_DEVICE } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/auth/current_user");
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchDBUsers = () => async dispatch => {
  const res = await axios.get("/api/users");
  dispatch({ type: FETCH_DB_USERS, payload: res.data});
};

export const addNewDevice = (values) => async dispatch => {
  const res = await axios.post("/api/addnewdevice", values);
  dispatch({ type: FETCH_USER, payload: res});
}
