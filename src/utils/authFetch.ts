import type { RootState } from '../store';

export const authFetch = async (
  input: RequestInfo,
  init: RequestInit = {},
  getState: () => RootState
) => {
  const { token } = getState().auth;
  
  const headers = new Headers(init.headers || {});
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  return fetch(input, {
    ...init,
    headers,
  });
};