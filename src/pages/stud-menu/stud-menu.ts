import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppPenghalauPage } from '../app-penghalau/app-penghalau';
import { StudEAduanPage } from '../stud-e-aduan/stud-e-aduan';
import { StudStatusAduanPage } from '../stud-status-aduan/stud-status-aduan';
import { InfoAedesPage } from '../info-aedes/info-aedes';



/*
  Generated class for the StudMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stud-menu',
  templateUrl: 'stud-menu.html'
})
export class StudMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudMenuPage');
  }

  appPenghalau(){
    this.navCtrl.push(AppPenghalauPage);
  }

  eAduan(){
    this.navCtrl.push(StudEAduanPage);
  }

  statusAduan(){
    this.navCtrl.push(StudStatusAduanPage);
  }

    infoAedes(){
    this.navCtrl.push(InfoAedesPage);
  }


}
