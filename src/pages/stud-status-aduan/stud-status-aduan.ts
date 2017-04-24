import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { StaffButiranKesPage } from '../staff-butiran-kes/staff-butiran-kes';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { StudButiranAduanPage } from '../stud-butiran-aduan/stud-butiran-aduan';

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

  aduans: any;
  myDate: any;
  another: any;
  matrik: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  semakStatus(){

    let loading = this.loadingCtrl.create({
      content: 'Sedang semak...'
    });

    loading.present();

    this.af.database.list('/aduanList', {
      query: {
        orderByChild: 'matrik',
        equalTo: this.matrik
      }
    }).map((aduan) => {
      return aduan.sort(function(a,b){
        return b.tsid - a.tsid
      });
    }).subscribe((value) => {
      this.aduans = value
      if (this.aduans == undefined || this.aduans == "")
      {
        let alert = this.alertCtrl.create({
          title: 'Gagal!',
          subTitle: 'Tiada rekod ditemui',
          buttons: ['Ok']
        });
        alert.present();
      }
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudStatusAduanPage');
  }

  aduanClicked(aduan){
    this.navCtrl.push(StudButiranAduanPage, {aduan});
  }

}
