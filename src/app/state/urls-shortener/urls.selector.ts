import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UrlNewState, urlAdapter } from './urls.state';

export const URL_STATE_NAME = 'urls';
export const getURLs = createFeatureSelector<UrlNewState>(URL_STATE_NAME);
export const urlSelectors = urlAdapter.getSelectors();

export const getPosts = createSelector(getURLs, urlSelectors.selectAll);
