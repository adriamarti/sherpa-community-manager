/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateAccountParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateAccountParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type TransformationTypeKey =
  | 'restore'
  | 'fill'
  | 'remove'
  | 'recolor'
  | 'removeBackground';

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type TransformationFormProps = {
  action: 'Add' | 'Update';
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};
