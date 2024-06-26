export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type Product = {
  id: number;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
};

export type CreateProduct = {
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
};

export type Supplier = {
  id: number;
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: string;
  status: string;
};

export type CreateSupplier = {
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: string;
  status: string;
};

export type Customer = {
  id: number;
  photo: string;
  name: string;
  email: string;
  spent: string;
  phone: string;
  address: string;
  register_date: string;
};

export type Order = {
  id: number;
  photo: string;
  name: string;
  address: string;
  products: string;
  price: string;
  status: string;
  order_date: string;
};

export type IncomeExpense = {
  id: number;
  name: string;
  amount: string;
  type: string;
};

export type Review = {
  id: number;
  name: string;
  testimonial: string;
};

export type Pharmacy = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating?: string;
};

export type NearestPharmacy = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating?: string;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
  status: string;
};

export interface INanny {
  about: string;
  avatar_url: string;
  birthday: string;
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  characters: string[];
  reviews: {
    comment: string;
    rating: number;
    reviewer: string;
  }[];
}

export type typeMsg = 'success' | 'error';

export interface IErrorData {
  errorDetail: unknown;
  message: string;
  status: string;
}

export interface IError {
  data: IErrorData;
  status: number;
}

export interface IData {
  data: unknown;
  message: string;
  status: string;
}

export interface IRequest {
  endpointName: string;
  error: IError;
  data: IData;
  requestId: string;
  nameApi: string;
  status: string;
}

export interface IMutationExecuted extends IRequest {}

export interface IQueryRejected extends IRequest {}

export interface ICombineRequests {
  executedMutation: IMutationExecuted | null;
  rejectedQuery: IQueryRejected | null;
}

export interface ISliceNotify {
  mutationsExecuted: IMutationExecuted[] | [];
  queriesRejected: IQueryRejected[] | [];
  message: string | null;
  type: typeMsg | string | null;
}
