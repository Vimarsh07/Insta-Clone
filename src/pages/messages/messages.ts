import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  message;
  

  constructor(public navCtrl: NavController) {

    this.initializeMess;
  }
  
  initializeMess() {
    this.message = [
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
  

  getMess(ev) {
    // Reset items back to all of the items
    this.initializeMess();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.message = this.message.filter((message) => {
        return (message.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
