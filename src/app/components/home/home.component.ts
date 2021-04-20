import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalActivated:boolean = false;

  constructor(
    private readonly modal: ModalService
    ) {

     }

  ngOnInit(): void {
  }

  showModal(type:string): void {   

   this.modalActivated = true;

   this.modal.selectModal(type);

  }

}
