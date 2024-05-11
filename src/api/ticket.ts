import axios from "lib/axios";
import { getErrorMessage } from "api";
import { APIPayment } from "models/api/ticket";
import { Payment } from "models/ticket";

/** 결제 번호 발급 */
export function makePaymentId(): Promise<string> {
  return new Promise((resolve, reject) => {
    axios
      .post<string>("/payments/", {
        "price": 2000
      }, {
        headers: {
          "Authorization": "Basic dGVzdDpweWNvbmtyNCQ="
        },
      })
      .then((response: any) => {
        // get merchant_id from response(json response.data)
        console.log(response.data);
        resolve(response.data.merchant_id);
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}

/** 결제 결과 전송 */
export function completePayment(paymentId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
    return;

    // eslint-disable-next-line no-unreachable
    axios
      .post<void>("/ticket/purchase")
      .then((response) => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}

/** 환불 요청 */
export function refundPayment(paymentId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    resolve();
    return;

    // eslint-disable-next-line no-unreachable
    axios
      .post<void>("/ticket/purchase/refund")
      .then((response) => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}

/** 결제 내역 조회 */
export function listPayments(): Promise<Payment[]> {
  return new Promise((resolve, reject) => {
    resolve([]);
    return;

    // eslint-disable-next-line no-unreachable
    axios
      .get<APIPayment[]>("/ticket/purchase")
      .then((response) => {
        resolve(Payment.fromAPIs(response.data));
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}
