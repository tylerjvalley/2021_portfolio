import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from '../modal/modal.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
      HomeComponent,
      ModalComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [],
    bootstrap: [HomeComponent]
  })
  export class HomeModule { }
  