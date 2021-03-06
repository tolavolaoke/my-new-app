import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'; //imports the Http Client which prepares the setup for the API






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //added in the NgModule declarations as a property

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
