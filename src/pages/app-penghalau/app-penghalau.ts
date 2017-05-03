import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { AppAvailability } from '@ionic-native/app-availability';
// import { Device } from '@ionic-native/device';

// import { InAppBrowser, AppAvailability, Device } from 'ionic-native';

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
    window.open("https://play.google.com/store/apps/details?id=com.dragonfire.mosquitokiller", "_system");
  }
}
