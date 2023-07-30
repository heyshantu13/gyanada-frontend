// axiosInterceptors.js
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showPageLoader, hidePageLoader } from '../redux/loaderSlice';

export const customAxios = axios.create();
const userToken = localStorage.getItem('token') || null

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



export const publicRequest = customAxios.create({
  baseURL: "http://localhost:8081/api/web",
});
export const userRequest = customAxios.create({
  baseURL: "http://localhost:8081/api/web",
  headers: { Authorization: `${userToken}` },
});
export const userMultipartRequest = customAxios.create({
  baseURL: "http://localhost:8081/api/web",
  headers: { Authorization: `${userToken}` ,
             "content-type": "multipart/form-data",
          },
});


// Request Interceptor
publicRequest.interceptors.request.use(
  (config) => {
    showLoader();
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Response Interceptor
publicRequest.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Request Interceptor
userRequest.interceptors.request.use(
  (config) => {
    showLoader();
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Response Interceptor
userRequest.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Request Interceptor
userMultipartRequest.interceptors.request.use(
  (config) => {
    showLoader();
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Response Interceptor
userMultipartRequest.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);