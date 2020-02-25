import axios from "axios";
import * as actionsType from "./actionsType";


function requestPosts() {
  return {
    type: actionsType.REQUEST_POSTS,
  };
}

function receivePosts(json) {
  return {
    type: actionsType.RECEIVE_POSTS,
    items: json,
    receivedAt: Date.now(),
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts()); 
    const axiosConfig = {
      withCredentials: true,
    };
    return axios
      .get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists")
      .then(response => {
        console.log(response);
        dispatch(receivePosts(response.data));
      })
      .catch(err => {
        console.log("An error occurred.", err);
      });
  };
}