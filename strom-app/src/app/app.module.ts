import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BearbeitenComponent } from './bearbeiten/bearbeiten.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD2OvCbn5ApVGrX4eToPbmMGJG8EsYVsqA",
  authDomain: "stromablesungen.firebaseapp.com",
  databaseURL: "https://stromablesungen.firebaseio.com",
  projectId: "stromablesungen",
  storageBucket: "stromablesungen.appspot.com",
  messagingSenderId: "336542996203"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BearbeitenComponent,
    DetailComponent,
    ListeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'liste',
        component: ListeComponent
      },
      {
        path: 'bearbeiten/:id',
        component: BearbeitenComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
