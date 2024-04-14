import { Enum, EnumItem, Enum_isCode } from ".";

/** 결제 상태 */
export type PaymentStatus = EnumItem<PaymentStatusCode> & {
  canRefund: boolean;
};

const codes = [
  "BEFORE_PAYMENT",
  "PAYMENT_FAILED",
  "PAYMENT_SUCCEED",
  "REFUND_FAILED",
  "REFUND_SUCCEED",
] as const; // TODO

export type PaymentStatusCode = (typeof codes)[number];
const isCode = Enum_isCode(codes);
function fromCode(code: string): PaymentStatus {
  return isCode(code) ? PaymentStatuses[code] : PaymentStatuses.unknown;
}

const PaymentStatuses: Enum<PaymentStatus, PaymentStatusCode> = {
  codes: codes,
  isCode: isCode,
  fromCode: fromCode,
  BEFORE_PAYMENT: {
    code: "BEFORE_PAYMENT",
    name: "결제 전",
    canRefund: false,
  },
  PAYMENT_FAILED: {
    code: "PAYMENT_FAILED",
    name: "결제 실패",
    canRefund: false,
  },
  PAYMENT_SUCCEED: {
    code: "PAYMENT_SUCCEED",
    name: "결제 성공",
    canRefund: true,
  },
  REFUND_FAILED: {
    code: "REFUND_FAILED",
    name: "환불 실패",
    canRefund: false,
  },
  REFUND_SUCCEED: {
    code: "REFUND_SUCCEED",
    name: "환불 성공",
    canRefund: false,
  },
  unknown: {
    code: "unknown",
    name: "알 수 없음",
    canRefund: false,
  },
};

export default PaymentStatuses;
