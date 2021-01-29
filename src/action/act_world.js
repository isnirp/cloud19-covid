import { GET_SUMMARY, GET_WORLD } from "./types";
import axios from "axios";

export const getWorldSummary = () => async (dispatch) => {
  const res = await axios.get("https://api.covid19api.com/world");
  /*  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );  */
 /*  console.log("GET_WORLD CALLED");
  const res = [{id:1,name:"test1"}, {id:2,name:"test2"}] */
  console.log(res.data);
  dispatch({
    type: GET_WORLD,
    payload: res.data,
  });
};

export const getSummary = () => async (dispatch) => {
  const res = await axios.get("https://api.covid19api.com/summary");
  /* const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  ); */
  console.log(res.data);
  dispatch({
    type: GET_SUMMARY,
    payload: res.data,
  });
};
