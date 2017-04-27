import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';

import { DataProvider } from '../../providers/data';

/*
  Generated class for the StaffButiranKes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-butiran-kes',
  templateUrl: 'staff-butiran-kes.html'
})
export class StaffButiranKesPage implements OnInit {

aduan : any;
toggle: boolean;

  // lokasi: string;
  // coord: string;
  // pemerhatian: string;
  // status: string;
  // staf: string;
  // telefon: number;
  // gambar: string;
  // id: number;

  editList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController, public data: DataProvider, public toastCtrl: ToastController) {
    this.editList = af.database.list('/aduanList');
  }

ngOnInit(){
  this.aduan = this.navParams.get('aduan');
  if(this.aduan.tindakan == "Ya")
  {
    this.toggle = true;
  }
  else
  {
    this.toggle = false;
  }
}
  ionViewDidLoad() {
  }

  openMap()
  {
    console.log("clicked!");
    window.open("http://www.google.com/maps/place/" + this.aduan.coord);
  }

  toYes(currentid)
  {
    console.log(currentid);
  let alert = this.alertCtrl.create({
    title: 'Pasti?',
    message: 'Adakah anda pasti untuk label kes ini selesai?',
    buttons: [
      {
        text: 'Tidak',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ya',
        handler: () => {
          this.editList.update(this.aduan.$key,{
            tindakan: 'Ya'
          })
          this.navCtrl.pop();
          let toast0 = this.toastCtrl.create({
            message: 'Aduan berjaya diselesaikan!',
            duration: 3000,
            position: 'top'
          });

          toast0.present();
        }
      }
    ]
  });
  alert.present();
  }

  toNo(currentid)
  {
    console.log(currentid);
  let alert = this.alertCtrl.create({
    title: 'Pasti?',
    message: 'Adakah anda pasti untuk label kes ini belum selesai?',
    buttons: [
      {
        text: 'Tidak',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ya',
        handler: () => {
          this.editList.update(this.aduan.$key,{
            tindakan: 'Tidak'
          })
          this.navCtrl.pop();
          let toast1 = this.toastCtrl.create({
            message: 'Aduan dilabel sebagai belum selesai!',
            duration: 3000,
            position: 'top'
          });

          toast1.present();
        }
      }
    ]
  });
  alert.present();
  }

  delete()
  {
    let alert2 = this.alertCtrl.create({
      title: 'Pasti?',
      message: 'Adakah anda pasti untuk padam kes ini?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            this.editList.remove(this.aduan.$key)
            this.navCtrl.pop();
            let toast2 = this.toastCtrl.create({
              message: 'Aduan telah berjaya dipadamkan!',
              duration: 3000,
              position: 'top'
            });

            toast2.present();
          }
        }
      ]
    });
    alert2.present();
  }

}
