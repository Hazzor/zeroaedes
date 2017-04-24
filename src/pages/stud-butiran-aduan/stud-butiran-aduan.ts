import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';

import { DataProvider } from '../../providers/data';

/*
  Generated class for the StudButiranAduan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stud-butiran-aduan',
  templateUrl: 'stud-butiran-aduan.html'
})
export class StudButiranAduanPage implements OnInit {

  aduan : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController) {
  }

  ngOnInit()
  {
    this.aduan = this.navParams.get('aduan');
  }

  openMap()
  {
    console.log("clicked!");
    window.open("http://www.google.com/maps/place/" + this.aduan.coord);
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad StudButiranAduanPage');
  }

}
