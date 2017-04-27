import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Market } from '@ionic-native/market';

/*
  Generated class for the AppPenghalau page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-app-penghalau',
  templateUrl: 'app-penghalau.html'
})
export class AppPenghalauPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPenghalauPage');
  }

  downloadApp()
  {
    // this.market.open('com.dragonfire.mosquitokiller');
  }

}
