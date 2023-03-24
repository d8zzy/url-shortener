import { createAction, props } from '@ngrx/store';
import { URLs } from '../models/url.model';

export const shortenURL = createAction(
  '[URLs Page] Shorten URL',
  props<{ url: string }>()
);

export const loadURLs = createAction('[URLs Page] Load URLs');

export const loadURLsSuccess = createAction(
  '[URLs API] URLs Load Success',
  props<{ urls: URLs }>()
);

export const resetState = createAction('[Home Component] Reset State');
