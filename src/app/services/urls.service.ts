import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { URLs } from '../state/models/url.model';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  constructor(private http: HttpClient) {}

  shortenURL(urlObject: URLs): Observable<any> {
    return this.http
      .get<any>(environment.baseURL + 'shorten?url=' + urlObject.url)
      .pipe(catchError((err) => this.catchErrors(err)));
  }

  catchErrors(error: any): Observable<any> {
    if (error && error.error && error.error.error) {
      alert(error.error.error);
    } else if (error && error.message) {
      alert(error.message);
    } else {
      alert(JSON.stringify(error));
    }
    return throwError(error);
  }
}
