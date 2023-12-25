import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
 
  name: 'contacts',
  
  initialState,
  
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
       
        state.contacts.items = Array.isArray(payload) ? payload : [];
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      ),
});


export const contactsReducer = contactsSlice.reducer;
