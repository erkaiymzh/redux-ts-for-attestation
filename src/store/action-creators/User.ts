import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/todo";

export const fetchUsers = () => {
  console.log("fetch");
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "An error occured",
      });
    }
  };
};
