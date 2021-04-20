import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  title:string;
  information:string;

  constructor(modal: ModalService) {
    this.title = modal.modalType;
    this.information = modal.modalInfo;
   }

  ngOnInit(): void {
    const projectModal:HTMLElement = document.getElementById('projectModal');
    const myInput = document.getElementById('myInput');
    projectModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
    })

  }




}
