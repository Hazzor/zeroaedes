import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudButiranAduanPage } from '../stud-butiran-aduan/stud-butiran-aduan' ;

/*
  Generated class for the StudStatusAduan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stud-status-aduan',
  templateUrl: 'stud-status-aduan.html'
})
export class StudStatusAduanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudStatusAduanPage');
  }

  itemClicked(){
    this.navCtrl.push(StudButiranAduanPage);

  }

}
