import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
user:{}
  },
  reducers: {
    setUserData: (state, action) => {
    
    }
}
});

export const {} = userSlice.actions;
export default userSlice.reducer;