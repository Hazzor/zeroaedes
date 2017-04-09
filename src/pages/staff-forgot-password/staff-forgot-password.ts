import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { LoginPage } from '../login/login';
/*
  Generated class for the StaffForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-forgot-password',
  templateUrl: 'staff-forgot-password.html'
})
export class StaffForgotPasswordPage {

  error: any;
  form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private alertCtrl: AlertController) {
    this.form = {
      email: ''
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffForgotPasswordPage');
  }

  reset() {
    this.auth.sendPasswordResetEmail(this.form.email).subscribe(data => {
      let alert = this.alertCtrl.create({
      title: 'Berjaya!',
      subTitle: 'Sila periksa emel anda',
      buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(LoginPage);
    }, error => {
      let alert = this.alertCtrl.create({
      title: 'Gagal!',
      subTitle: 'Emel anda tidak sah',
      buttons: ['OK']
      });
      alert.present();
      // this.error = error;
    })

}
}
