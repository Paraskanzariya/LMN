// payment.model.ts

export interface Payment {
  id?: number;
  customerName: string;
  amount: number;
  paymentDate: Date;
  // Add other properties as needed
}
