import axios from "axios";
function requestPosts() {
  return {
    type: "REQUEST_POSTS",
  };
}
function receivePosts(json) {
  return {
    type: "RECEIVE_POSTS",
    items: json.data,
    receivedAt: Date.now(),
  };
}
export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts());
    const axiosConfig = {
      withCredentials: true,
    };
    //明明设置了跨域，可还是不行...
    return axios.get("http://localhost:8081/api/v1/news", axiosConfig).then(res => {
      console.log(res);
      dispatch(receivePosts(res.data)).catch(err => {
        console.log("error:", err);
      });
    });
  };
}
