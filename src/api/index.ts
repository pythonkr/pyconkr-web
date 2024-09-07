import { AxiosError, AxiosRequestConfig } from "axios"

export function getHeaders(
  others?: NonNullable<AxiosRequestConfig["headers"]>
): NonNullable<AxiosRequestConfig["headers"]> {
  return { ...others };
}

export function getErrorMessage(error: AxiosError | Error): string {
  if ("response" in error) {
    if (error.response) {
      const statusCode = error.response.status;

      if (statusCode >= 500) return statusCode.toString();
      if (statusCode >= 400) {
        if (error.response.data === null) return statusCode.toString();
        if (typeof error.response.data === "string") return error.response.data.toString();

        return statusCode.toString();
      }
      if (statusCode < 100) return "Server error";

      return statusCode.toString();
    } else return error.message;
  } else return error.message;
}

export * as SponsorAPI from "./sponsor"

