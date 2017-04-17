import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

  }

  ngOnInit(){
    this.af.database.list('/aduanList', {
    }).map((aduan) => {
      return aduan.sort(function(a,b){
        return b.tsid - a.tsid
      });
    }).subscribe((value) => {this.aduans = value});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffSemuaKesPage');
  }

  itemClicked(){
    this.navCtrl.push(StaffButiranKesPage);
  }

  // dateClicked(){
  //   this.another = this.myDate.split(/-|:|T/);
  //   console.log(this.another);
  //   console.log(this.myDate);
  //   let timestamp = new Date (this.another[0],this.another[1],this.another[2],this.another[3],this.another[4],0,0);
  //   console.log(timestamp);
  //   let something = timestamp.getTime();
  //   console.log(something);
  //
  // }

}
