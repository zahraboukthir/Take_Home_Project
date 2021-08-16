import axios from "axios";
import { DELETE, GET } from "./actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    let res = await axios.get("/post/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    let { data } = await axios.delete(`/post/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: data,
    });
  } catch (error) {
    alert("delete error");
  }
};

