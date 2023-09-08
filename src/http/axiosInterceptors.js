// axiosInterceptors.js
import axios from "axios";
import { useDispatch } from "react-redux";
import { showPageLoader, hidePageLoader } from "../redux/loaderSlice";

export const customAxios = axios.create();
const userToken = localStorage.getItem("token") || null;

let activeRequests = 0;

const showLoader = () => {
  if (activeRequests === 0) {
    setTimeout(() => {
      if (activeRequests > 0) {
        // Access the dispatch function using useDispatch
        const dispatch = useDispatch();
        dispatch(showPageLoader());
      }
    }, 100);
  }
  activeRequests++;
};

const hideLoader = () => {
  activeRequests--;
  if (activeRequests === 0) {
    // Access the dispatch function using useDispatch
    const dispatch = useDispatch();
    dispatch(hidePageLoader());
  }
};

export const BASE_URL = "http://13.232.230.93:9000/api/web";

export const publicRequest = customAxios.create({
  baseURL: BASE_URL,
});
export const userRequest = customAxios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `${userToken}` },
});
export const userMultipartRequest = customAxios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${userToken}`,
    "content-type": "multipart/form-data",
  },
});
