import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { User, Courses } from '../types/types';

interface AuthState {
  user: User | null;
  courses: Courses | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  courses: null,
  status: 'idle',
  token: null,
  error: null,
};

const apiUrl = 'http://92.255.111.99:3000/api/auth/login';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.44/1',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const data = await response.json();
      const token = response.headers.get('Authorization')?.split(' ')[1] || '';

      return { user: data.user, courses: data.courses, token };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.courses = null;
      state.token = null;
      state.status = 'idle';
      localStorage.removeItem('authState');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.courses = action.payload.courses;
        state.token = action.payload.token;
        state.status = 'succeeded';
        localStorage.setItem('authState', JSON.stringify(state));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        console.error('Login failed:', action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
