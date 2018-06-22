import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicesModule } from 'somemail73-test-services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule.forRoot('Configurable param')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
