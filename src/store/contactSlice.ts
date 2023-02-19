import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResultContacts } from "@/src/models/contact";
import HTTP from "@/src/utils/http_common";

interface IContactState {
  data: IResultContacts;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string;
}

const initialState: IContactState = {
  data: {
    count: 0,
    perPage: 0,
    currentPage: 0,
    totalPages: 0,
    results: []
  },
  loading: 'idle',
  error: ''
}

interface ParamsFetchContacts {
  page?: number,
  search?: string
}

//Thunks:
export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts", 
  async ({page = 1, search = ""}: ParamsFetchContacts = {}) => {
    const response = await HTTP.get<IResultContacts>(`/contacts?page=${page}${search && `&_sort=email:${search}`}`);
    const data: IResultContacts = response.data;
    return data;
  }
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = 'pending';
    })
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.data = payload as IResultContacts;
      state.loading = 'succeeded';
    })
    builder.addCase(fetchContacts.rejected, (state, {error}) => {
      state.loading = 'failed';
      state.data = {
        ...initialState.data,
        results:[]
      }
      state.error = error.message as string;
    })
  },
})

export default contactSlice.reducer