import { createReducer, on } from '@ngrx/store';
import {
  loadURLs,
  loadURLsSuccess,
  resetState,
  shortenURL,
} from './urls.action';

export interface URLsState {
  urls: any;
  error?: string;
  status?: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: URLsState = {
  urls: null,
  error: '',
  status: 'pending',
};

export const urlReducer = createReducer(
  initialState,

  //Shortens the url entered
  on(shortenURL, (state, action) => {
    return {
      ...state,
      urls: action.url,
    };
  }),

  on(loadURLs, (state) => ({ ...state, status: 'loading' })),

  on(loadURLsSuccess, (state, { urls }) => ({
    ...state,
    url: urls,
    error: '',
    status: 'success',
  })),

  on(resetState, (state) => {
    return {
      ...state,
      url: null,
    };
  })
);
