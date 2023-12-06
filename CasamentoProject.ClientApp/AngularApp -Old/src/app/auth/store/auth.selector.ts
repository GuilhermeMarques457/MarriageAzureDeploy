import { AppState } from 'src/app/store/app.reducer';

export const selectAuthState = (state: AppState) => state.auth;
export const selectAuthUserAuthenticated = (state: AppState) =>
  state.auth.userAuthenticated;
