import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;
  
  constructor(public navCtrl: NavController) {
    this.initializeItems;

  }
  
  initializeItems() {
    this.items = [
      'Think Digital',
      'Google',
      'Bill Gates',
      'Cordova',
      'Tumblir',
      'Epicmemes',
      'Comicgifs',
      'Genoa',
      'Glasglow',
        ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}


