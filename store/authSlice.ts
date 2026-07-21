import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isSignedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isSignedIn: false,
  isLoading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue },
  ) => {
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (username === "admin" && password === "admin123") {
      return true;
    } else {
      return rejectWithValue("Invalid username or password");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.isSignedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
        state.isSignedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
