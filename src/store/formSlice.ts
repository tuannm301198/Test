import {createSlice} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FormState {
  name: string;
  email: string;
}

const initialState: FormState = {
  name: '',
  email: '',
};

export const formSlice = createSlice({
  name: 'submitForm',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    resetState: () => initialState,
  },
});

export const formApi = createApi({
  reducerPath: 'submitApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    validateForm: builder.mutation<string, FormState>({
      query: body => {
        return {
          url: '/posts',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {changeName, changeEmail, resetState} = formSlice.actions;
export const {useValidateFormMutation} = formApi;

export default formSlice.reducer;
