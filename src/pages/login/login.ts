import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StaffMenuPage } from '../staff-menu/staff-menu';
import { StudMenuPage } from '../stud-menu/stud-menu';
import { StaffForgotPasswordPage } from '../staff-forgot-password/staff-forgot-password';
import { StaffSignUpPage } from '../staff-sign-up/staff-sign-up';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  status:string = 'Staf';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  stafLogin(){

    this.navCtrl.setRoot(StaffMenuPage);

  }

  pelajarLogin(){

     this.navCtrl.setRoot(StudMenuPage);

  }

  openForgotPasswordPage(){

     this.navCtrl.push(StaffForgotPasswordPage);

  }

  openSignUpPage(){
    this.navCtrl.push(StaffSignUpPage);
  }

}
