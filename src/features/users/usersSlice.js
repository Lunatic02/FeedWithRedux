import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Lukas Torrezini' },
  { id: 1, name: 'You' },
  { id: 2, name: 'Maike Bigo' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
