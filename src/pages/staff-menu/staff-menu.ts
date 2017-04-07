import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoAedesPage } from '../info-aedes/info-aedes';
import { StaffStatsPage } from '../staff-stats/staff-stats';
import { AppPenghalauPage } from '../app-penghalau/app-penghalau';
import { StaffLaporKesPage } from '../staff-lapor-kes/staff-lapor-kes';
import { StaffSemuaKesPage } from '../staff-semua-kes/staff-semua-kes';
// import { StaffLaporKesPage } from '../staff-lapor-kes/staff-lapor-kes';


/*
  Generated class for the StaffMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-menu',
  templateUrl: 'staff-menu.html'
})
export class StaffMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffMenuPage');
  }

  infoAedes(){
    this.navCtrl.push(InfoAedesPage);
  }

  dataStatistik(){
    this.navCtrl.push(StaffStatsPage);
  }

  appPenghalau(){
    this.navCtrl.push(AppPenghalauPage);
  }

  laporKes(){
    this.navCtrl.push(StaffLaporKesPage);
  }

  semuaKes(){
    this.navCtrl.push(StaffSemuaKesPage);
  }


}
