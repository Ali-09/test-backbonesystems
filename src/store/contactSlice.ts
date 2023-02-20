import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResultContacts, IContact } from "@/src/models/contact";
import type { NewContactData } from "@/src/components";
import HTTP from "@/src/utils/http_common";

interface IContactState {
  data: IResultContacts;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string;
  message: string;
  contact: NewContactData
}

interface IContactEdit {
  data: NewContactData;
  id: string;
}

const initialState: IContactState = {
  data: {
    count: 0,
    perPage: 0,
    currentPage: 0,
    totalPages: 0,
    results: []
  },
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  message: "",
  loading: "idle",
  error: ""
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

export const fetchContact = createAsyncThunk(
  "contact/fetchContact", 
  async (id:string) => {
    const response = await HTTP.get<IContact>(`/contacts/${id}`);
    const data: IContact = response.data;
    return data;
  }
);

export const postContact = createAsyncThunk(
  "contact/postContacts", 
  async (contact: NewContactData, { rejectWithValue }) => {
    try{
      const response = await HTTP.post("/contacts", contact);
      const data = response.data;
      return data;
    }catch(e: any){
      const errors = e.response.data?.data?.errors
      if(errors) return rejectWithValue(Object.values(errors).flat()[0]);
      return rejectWithValue(e.response.data?.message || e.message )
    }
  }
);

export const putContact = createAsyncThunk(
  "contact/putContacts", 
  async (contactEdit: IContactEdit, { rejectWithValue }) => {
    try{
      const response = await HTTP.put(`/contacts/${contactEdit.id}`, contactEdit.data);
      const data = response.data;
      return data;
    }catch(e: any){
      const errors = e.response.data?.data?.errors
      if(errors) return rejectWithValue(Object.values(errors).flat()[0]);
      return rejectWithValue(e.response.data?.message || e.message )
    }
  }
);

//Slice:
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = 'pending';
        state.message = '';
        state.error = '';
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.data = payload as IResultContacts;
        state.loading = 'succeeded';
      })
      .addCase(fetchContacts.rejected, (state, {error}) => {
        state.loading = 'failed';
        state.data = {
          ...initialState.data,
          results:[]
        }
        state.error = error.message as string;
      })
      .addCase(fetchContact.pending, (state) => {
        state.loading = 'pending';
        state.contact = initialState.contact
        state.message = '';
        state.error = '';
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.contact = payload as IContact;
        state.loading = 'succeeded';
      })
      .addCase(fetchContact.rejected, (state, {error}) => {
        state.loading = 'failed';
        state.contact = initialState.contact 
        state.error = error.message as string;
      })
      .addCase(postContact.pending, (state) => {
        state.loading = 'pending';
        state.message = '';
        state.error = '';
      })
      .addCase(postContact.fulfilled, (state) => {
        state.message = "Contacto creado correctamente!";
        state.loading = 'succeeded';
      })
      .addCase(postContact.rejected, (state, { payload }) => {
        state.loading = 'failed';
        state.error = payload as string;
      })
      .addCase(putContact.pending, (state) => {
        state.loading = 'pending';
        state.message = '';
        state.error = '';
      })
      .addCase(putContact.fulfilled, (state) => {
        state.message = "Contacto modificado correctamente!";
        state.loading = 'succeeded';
      })
      .addCase(putContact.rejected, (state, { payload }) => {
        state.loading = 'failed';
        state.error = payload as string;
      })
  },
})

export default contactSlice.reducer