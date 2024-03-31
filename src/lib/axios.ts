import axios from "axios";

declare module "axios" {
  interface AxiosStatic {
    get<R = AxiosResponse>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<R = AxiosResponse, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    head<R = AxiosResponse>(url: string, config?: AxiosRequestConfig): Promise<R>;
    options<R = AxiosResponse>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<R = AxiosResponse, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>;
    put<R = AxiosResponse, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>;
    patch<R = AxiosResponse, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>;
  }
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_PYCONKR_API,
});

export default instance;
