import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the StudButiranAduan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stud-butiran-aduan',
  templateUrl: 'stud-butiran-aduan.html'
})
export class StudButiranAduanPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit()
  {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad StudButiranAduanPage');
  }

}
