import { createSlice } from '@reduxjs/toolkit';
// this can make it for contact from UI, This is not the actual Gmail**
export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    selectedEmail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    openSendMessage: (state)  => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  }, 
});

export const { openSendMessage, closeSendMessage, selectEmail } = emailSlice.actions;

export const selectOpenEmail = (state) => state.email.selectedEmail;
export const selectSendMessageIsOpen = (state) => state.email.sendMessageIsOpen;

export default emailSlice.reducer;
