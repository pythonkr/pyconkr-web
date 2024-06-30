import PaymentStatuses, { PaymentStatus } from "enums/paymentStatuses";
import { APIPayment } from "./api/ticket";
import { toDateIfValid } from "utils";

export class Payment {
  id: string;
  status: PaymentStatus;
  price: number;
  createdAt: Date | null;
  modifiedAt: Date | null;

  private constructor(p: Payment) {
    this.id = p.id;
    this.status = p.status;
    this.price = p.price;
    this.createdAt = p.createdAt;
    this.modifiedAt = p.modifiedAt;
  }

  static fromAPI(d: APIPayment): Payment {
    return new Payment({
      id: d.id,
      status: PaymentStatuses.fromCode(d.status),
      price: d.price,
      createdAt: toDateIfValid(d.created_at),
      modifiedAt: toDateIfValid(d.modified_at),
    });
  }
  static fromAPIs(data: APIPayment[]): Payment[] {
    return data.map((d) => Payment.fromAPI(d));
  }
}
