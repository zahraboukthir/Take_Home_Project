import {DELETE, GET } from "./actionTypes";

const init = {
    posts: [],
    loading: true,
  };
const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case GET:
        return {
          ...state,
          posts: payload,
          loading: false,
        };
      case DELETE:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== payload._id),
        };
      default:
        return state;
    }
  };
  
  export default reducer;