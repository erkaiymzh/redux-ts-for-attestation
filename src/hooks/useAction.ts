import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import UserActionCreatorns from "../store/action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreatorns, dispatch);
};
