export interface IContact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
  [key: string]: any;
}

export interface IResultContacts {
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  results: IContact[];
}
