import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StaffButiranKesPage } from '../staff-butiran-kes/staff-butiran-kes';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

/*
  Generated class for the StaffSemuaKes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-semua-kes',
  templateUrl: 'staff-semua-kes.html'
})
export class StaffSemuaKesPage implements OnInit {

  aduans: any;
  myDate: any;
  another: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingCtrl: LoadingController) {

  }

  ngOnInit(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();


    this.af.database.list('/aduanList', {
    }).map((aduan) => {
      return aduan.sort(function(a,b){
        return b.tsid - a.tsid
      });
    }).subscribe((value) => {
      this.aduans = value
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffSemuaKesPage');
  }

  aduanClicked(aduan){
    // console.log(aduan);
    this.navCtrl.push(StaffButiranKesPage, {aduan});
  }

  delete(aduan)
  {
    console.log(aduan);
  }

}
