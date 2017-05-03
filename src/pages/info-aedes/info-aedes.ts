import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InfoAedes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info-aedes',
  templateUrl: 'info-aedes.html'
})
export class InfoAedesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoAedesPage');
  }

  visitSite()
  {
    window.open("http://idengue.remotesensing.gov.my/idengue/index.php", "_system");
  }

}
