import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError , getuser, getusersession} from "./action";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "http://localhost:3000/posts"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

 
