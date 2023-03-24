import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { URLsEffect } from './state/urls-shortener/urls.effect';
import { urlReducer } from './state/urls-shortener/urls.reducer';
import { URL_STATE_NAME } from './state/urls-shortener/urls.selector';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(URL_STATE_NAME, urlReducer),
    NgbModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([URLsEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
