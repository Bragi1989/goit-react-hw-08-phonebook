import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/operations';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async ({ name, number }, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', { name, number });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      await instance.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
