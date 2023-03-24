import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  resetState,
  shortenURL,
} from 'src/app/state/urls-shortener/urls.action';
import { getURLs } from 'src/app/state/urls-shortener/urls.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  enteredURL!: string;
  urls$!: Observable<any>;
  fetching: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.urls$ = this.store.select(getURLs);
  }

  shortenURL() {
    //Reset the store state
    this.store.dispatch(resetState());

    //Shorten entered URL
    let url = this.enteredURL;
    this.store.dispatch(shortenURL({ url }));
  }
}
