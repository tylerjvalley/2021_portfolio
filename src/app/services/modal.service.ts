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
  public modalGif:string;


  constructor() { }

  public selectModal(modal:string) {

    this.modalType = modal;

    if (modal === 'EarnBet') {
      this.modalInfo = 'EarnBet is an online, decentralized casino with thousands of daily users. EarnBet is a platform that accepts cryptocurrencies such as Bitcoin and Ethereum to play a variety of games.';
      this.modalRepo = 'https://gitlab.com/eosbet/dev/new-site-angular';
      this.modalLink = 'https://earnbet.io/';
      this.modalGif =  '<iframe src="https://giphy.com/embed/GyADeK6Ar9Dal8NEhj" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    } else if (modal === 'BeTheHouse') {
      this.modalInfo = 'BeTheHouse is an online casino that takes a more centralized, traditional approach to gambling. BeTheHouse has slots games from reputable companies, as well as our own dice game.';
      this.modalRepo = 'https://gitlab.com/bethehouse/front-end/bth-angular';
      this.modalLink = 'https://bethehouse.casino/';
      this.modalGif =  '<iframe src="https://giphy.com/embed/5nLxkZhslpVJlzH3O3" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    } else if (modal === 'Stacker Ventures') {
      this.modalInfo = 'Stacker Ventures is a venture capital project that funds different web3 projects from different developers. Allows users to invest in projects via STACK tokens';
      this.modalRepo = 'https://gitlab.com/stackerventures/front-end/angular';
      this.modalLink = 'https://stacker.vc/';
      this.modalGif = '<iframe src="https://giphy.com/embed/ylJt7a56LR7ssiBV7L" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    }

  }

}
