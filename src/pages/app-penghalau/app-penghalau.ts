import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser, public aa: AppAvailability, public device: Device) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPenghalauPage');
  }


  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
  	let app: string;
  	if (this.device.platform === 'iOS') {
  		app = iosSchemaName;
  	} else if (this.device.platform === 'Android') {
  		app = androidPackageName;
  	} else {
  		let browser = this.iab.create(httpUrl + username, '_system');
  		return;
  	}

  	this.aa.check(app).then(
  		() => { // success callback
  			let browser = this.iab.create(appUrl + username, '_system');
  		},
  		() => { // error callback
  			let browser = this.iab.create(httpUrl + username, '_system');
  		}
  	);
  }

  openInstagram(username: string) {
  	this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }

  openTwitter(username: string) {
  	this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }

  openFacebook(username: string) {
  	this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }
}
