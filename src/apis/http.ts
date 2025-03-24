import { HttpError } from "@refinedev/core";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLoading(topLoadingBar: any) {
  axiosInstance.interceptors.request.use(
    function (config) {
      topLoadingBar.current?.continuousStart();
      return config;
    },
    function (error) {
      topLoadingBar.current?.complete();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      topLoadingBar.current?.complete();

      return response;
    },
    function (error) {
      topLoadingBar.current?.complete();
      return Promise.reject(error);
    }
  );
}

// Interceptor request
axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message ?? error?.message,
      statusCode: error.response?.status ?? error?.statusCode,
      errors: error?.response?.data?.errors,
    };
    return Promise.reject(customError);
  }
);

export default axiosInstance;
