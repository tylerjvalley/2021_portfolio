import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //which project is the modal for? 
  // earnbet, bethehouse, and stacker ventures

  public modalType:string;
  public modalInfo:string;
  public modalRepo:string;
  public modalLink:string;


  constructor() { }

  public selectModal(modal:string) {

    this.modalType = modal;

    if (modal === 'EarnBet') {
      this.modalInfo = 'EarnBet is an online, decentralized casino with thousands of daily users. EarnBet is a platform that accepts cryptocurrencies such as Bitcoin and Ethereum to play a variety of games.';
      this.modalRepo = 'https://gitlab.com/eosbet/dev/new-site-angular';
      this.modalLink = 'https://earnbet.io/';
    } else if (modal === 'BeTheHouse') {
      this.modalInfo = 'BeTheHouse is an online casino that takes a more centralized, traditional approach to gambling. BeTheHouse has slots games from reputable companies, as well as our own dice game.';
      this.modalRepo = 'https://gitlab.com/bethehouse/front-end/bth-angular';
      this.modalLink = 'https://bethehouse.casino/';
    } else if (modal === 'Stacker') {
      this.modalInfo = 'Stacker Ventures is a venture capital project that funds different web3 projects from different developers. Allows users to invest in projects via STACK tokens';
      this.modalRepo = 'https://gitlab.com/stackerventures/front-end/angular';
      this.modalLink = 'https://stacker.vc/';
    }

  }

  



}
