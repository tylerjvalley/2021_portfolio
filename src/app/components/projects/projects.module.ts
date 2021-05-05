import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from '../modal/modal.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
      ProjectsComponent,
      ModalComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [],
    bootstrap: [ProjectsComponent]
  })
  export class ProjectsModule { }
  