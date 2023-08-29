import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'User',
  initialState:{
    isLoggedIn: false,
    email: null,
    userId: null,
    isAdmin:false
  },
  reducers: {
    getUser(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn
      state.email = action.payload.email
      state.userId = action.payload.userId
      state.isAdmin = action.payload.isAdmin
    },
    outUser(state) {
      state.isLoggedIn = false
      state.email = null
      state.userId = null
      state.isAdmin = false
    },
  },
})

export const {getUser, outUser} = userSlice.actions;

export default userSlice.reducer;