import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  
  public modalType:string;
  public modalInfo:string;
  public modalRepo:string;
  public modalLink:string;
  public modalGif:string;
  public modalDescription:string;
  public modalTitle:string;


  constructor() { }

  public selectModal(modal:string) {

    this.modalType = modal;

    switch (modal) {
      case 'EarnBet':
        this.modalInfo = 'EarnBet is an online, decentralized casino with thousands of daily users. EarnBet is a platform that accepts cryptocurrencies such as Bitcoin and Ethereum to play a variety of games.';
        this.modalRepo = 'https://gitlab.com/eosbet/dev/new-site-angular';
        this.modalLink = 'https://earnbet.io/';
        this.modalGif =  '<iframe src="https://giphy.com/embed/GyADeK6Ar9Dal8NEhj" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case 'BeTheHouse':
        this.modalInfo = 'BeTheHouse is an online casino that takes a more centralized, traditional approach to gambling. BeTheHouse has slots games from reputable companies, as well as our own dice game.';
        this.modalRepo = 'https://gitlab.com/bethehouse/front-end/bth-angular';
        this.modalLink = 'https://bethehouse.casino/';
        this.modalGif =  '<iframe src="https://giphy.com/embed/5nLxkZhslpVJlzH3O3" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case 'Stacker Ventures':
        this.modalInfo = 'Stacker Ventures is a venture capital project that funds different web3 projects from different developers. Allows users to invest in projects via STACK tokens';
        this.modalRepo = 'https://gitlab.com/stackerventures/front-end/angular';
        this.modalLink = 'https://stacker.vc/';
        this.modalGif = '<iframe src="https://giphy.com/embed/ylJt7a56LR7ssiBV7L" width="100%" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
        break;
      case 'EarnbetDescription':
        this.modalTitle = 'EarnBet';
        this.modalDescription = 'EarnBet is an online, decentralized casino with thousands of daily users. EarnBet is a platform that accepts cryptocurrencies such as Bitcoin and Ethereum to play a variety of games. I mainly worked on updates for this project on the front end side. I helped debug and add additions to all of the main games and homepage, worked on the code for translations to korean and chinese, and created the front end for the entire BET Tokens page.';
        break;
      case 'BTHDescription':
        this.modalTitle = 'BeTheHouse'
        this.modalDescription = 'BeTheHouse is an online casino that takes a more centralized, traditional approach to gambling. BeTheHouse has slots games from reputable companies, as well as our own dice game. On this project I was responsible for the front end of the entire site, and worked with the back end developers to make the games and account sign in work.';
        break;
      case 'StackerDescription':
        this.modalTitle = 'Stacker Ventures';
        this.modalDescription = 'Stacker Ventures is a venture capital project that funds different web3 projects from different developers. Allows users to invest in projects via STACK tokens. I was responsible for the front end of the entire site, as well as web3 integration to make it work with the Ethereum blockchain to show current data and user funds.';
        break;
      case 'EOSDescription':
        this.modalTitle = 'EOSBet';
        this.modalDescription = 'EOSBet is the first crypto casino made by Aurora Tech and the predecessor to EarnBet. This works the same way as EarnBet does, except it only has EOS available to bet with. For this I mainly worked on smaller front end tasks and debugging.';
        break;
      case 'FranceDescription':
        this.modalTitle = 'France is Bacon';
        this.modalDescription = 'France is Bacon is a personal project that I made. I aimed to make a more user friendly desktop version of Reddit. I used react and redux along with the reddit API to pull information from subreddits that the user inputs into the search bar.';
        break;
      case 'BookDescription':
        this.modalTitle = 'Book Finder';
        this.modalDescription = 'Book Finder was a personal project that I made that allows users to create an account and create a library of books. The user can then organize their library to books that they want to read, are currently reading, and books that they have finished.';
        break;
      case 'MarketDescription':
        this.modalTitle = 'A Southern Market';
        this.modalDescription = 'A Southern Market is a project that is currently being worked on. It is an online marketplace that has products from independant vendors and small businesses around the southern United States. The user can make orders for products and follow vendors that they like. They can also search and filter results however they like.';
        break;
      case 'ConfettiDescription':
        this.modalTitle = 'Make it Rain Coins';
        this.modalDescription = 'This was a project to test a crypto confetti animation when a user claims dividends on EarnBet. Very simple project with a script for rendering the coin animations when a button is pushed. Unfortunately Heroku does not have the final version, so if you would like to see how it works, run it locally.';
        break;
      case 'TwitterDescription':
        this.modalTitle = 'Twitter API test';
        this.modalDescription = 'This was a test for signing users into twitter from EarnBet or BeTheHouse. Uses the Twitter API to authenticate users.'
        break;
      }


  }

}
