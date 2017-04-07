import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StaffButiranKesPage } from '../staff-butiran-kes/staff-butiran-kes';

/*
  Generated class for the StaffSemuaKes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-semua-kes',
  templateUrl: 'staff-semua-kes.html'
})
export class StaffSemuaKesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffSemuaKesPage');
  }

  itemClicked(){
    this.navCtrl.push(StaffButiranKesPage);

  }

}
