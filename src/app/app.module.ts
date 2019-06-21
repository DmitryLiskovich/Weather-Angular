import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes:Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: '**', redirectTo: 'weather'}
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
