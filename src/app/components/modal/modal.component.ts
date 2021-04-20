import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    const projectModal:HTMLElement = document.getElementById('projectModal');
    const myInput = document.getElementById('myInput');
    projectModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
    })
  }




}
