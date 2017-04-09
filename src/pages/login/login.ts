import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import { AuthProvider } from '../../providers/auth';

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
  error: any;
  form: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.form = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  stafLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Sila tunggu sebentar...'
    });
    loading.present();
    this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.setRoot(StaffMenuPage);
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
        title: 'Gagal!',
        subTitle: 'Emel atau kata laluan anda tidak sah!',
        buttons: ['OK']
        });
        alert.present();
        this.error = err;
      }, 1000);
    });
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
