import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UrlsService } from 'src/app/services/urls.service';
import { loadURLsSuccess, shortenURL } from './urls.action';

@Injectable()
export class URLsEffect {
  constructor(private actions$: Actions, private urlsService: UrlsService) {}

  shortenURL$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shortenURL),
      mergeMap((action) => {
        return this.urlsService.shortenURL(action).pipe(
          map((data) => {
            const urls = { url: data };
            return loadURLsSuccess({ urls });
          })
        );
      })
    );
  });
}
