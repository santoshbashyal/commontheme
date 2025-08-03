import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
export type MethodType = "get" | "post" | "put" | "patch" | "delete";
export const Http = axios.create({
  baseURL: "https://notesforag.com/api",
});

Http.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const HttpClient = {
  get: <T>(url: string, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("get", url, undefined, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("post", url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("put", url, data, config),
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("patch", url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig<T>) =>
    createRequest("delete", url, undefined, config),
};

const createRequest = async <TData>(
  method: MethodType,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<TData>
): Promise<AxiosResponse<TData> | undefined> => {
  //   try {
  switch (method) {
    case "get":
    case "delete":
      return await Http[method]<TData>(url, config);
    case "post":
    case "put":
    case "patch":
      return await Http[method]<TData>(url, data, config);
    default:
      return Promise.reject("Method not supported");
  }
  //   } catch (err) {
  //     throw new Error(err);
  //   }
};
