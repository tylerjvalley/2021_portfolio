import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  title:string;
  information:string;
  repo:string;
  link:string;
  gif:SafeHtml;
  descriptionModal:Boolean = false;
  descriptionTitle:string;
  description:string;

  constructor(
    modal: ModalService,
    private sanitizer: DomSanitizer
    ) {
    this.title = modal.modalType;
    this.information = modal.modalInfo;
    this.repo = modal.modalRepo;
    this.link = modal.modalLink;
    this.gif = sanitizer.bypassSecurityTrustHtml(modal.modalGif);
    this.descriptionTitle = modal.modalTitle;
    this.description = modal.modalDescription;
   }

  ngOnInit(): void {
    
    const projectModal:HTMLElement = document.getElementById('projectModal');
    const descriptionModal:HTMLElement = document.getElementById('descriptionModal');
    const myInput = document.getElementById('myInput');

    
    if (this.descriptionModal) {
      descriptionModal.addEventListener('shown.bs.modal', function(e) {
        myInput.focus();
      })
    } else {
      projectModal.addEventListener('shown.bs.modal', function (e) {
        myInput.focus();     
      })
    }

  }

  refreshModal() {
    location.reload();
  }

}
