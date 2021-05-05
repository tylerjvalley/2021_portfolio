import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  modalActivated:boolean = false;
  angular:boolean = true;
  react:boolean = false;
  other:boolean = false;

  constructor(private readonly modal: ModalService) { }

  ngOnInit(): void {
  }

  showModal(type:string): void {   

    this.modalActivated = true;
 
    this.modal.selectModal(type);
 
   }

   showSection(tech:string) {
     if (tech === 'Angular') {
       this.angular = true;
       this.react = false;
       this.other = false;
     } else if (tech === 'React') {
       this.react = true;
       this.angular = false;
       this.other = false;
     } else if (tech === 'Other') {
       this.other = true;
       this.angular = false;
       this.react = false;
     }
   }

}
