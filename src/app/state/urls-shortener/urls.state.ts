import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { URLs } from '../models/url.model';

export const urlAdapter = createEntityAdapter<URLs>({
  sortComparer: sortByName,
});

export interface UrlNewState extends EntityState<URLs> {
  url: string;
}

export function sortByName(a: URLs, b: URLs): number {
  const compare = a.url.localeCompare(b.url);
  if (compare > 0) {
    return -1;
  }
  if (compare < 0) {
    return 1;
  }

  return compare;
}
