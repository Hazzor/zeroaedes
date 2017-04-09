import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';

import { AuthProvider } from '../../providers/auth';
import { LoginPage } from '../login/login';

/*
  Generated class for the StaffSignUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-sign-up',
  templateUrl: 'staff-sign-up.html'
})
export class StaffSignUpPage {

  error: any;
  form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.form = {
      email: '',
      password: ''
    }
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffSignUpPage');
  }

  register() {
    let loading = this.loadingCtrl.create({
      content: 'Sila tunggu sebentar...'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Berjaya!',
            subTitle: 'Akaun anda telah berjaya didaftarkan!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(LoginPage);
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        this.error = registerError;
      }, 1000);
    });
  }


}
