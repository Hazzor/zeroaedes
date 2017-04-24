import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { DataProvider } from '../../providers/data';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import firebase from 'firebase';

import { Subscription } from 'rxjs/Subscription';

/*
  Generated class for the StaffLaporKes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-lapor-kes',
  templateUrl: 'staff-lapor-kes.html'
})
export class StaffLaporKesPage {


  coord: any;
  form: any;
  aduanList: any;
  gambaraduanURL: any;
  gambaraduanList: firebase.storage.Reference;

  authUserSub : Subscription;
  authUser : FirebaseObjectObservable<any>;
  authUserIdSub : Subscription;
  authUserId : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public cameraPlugin: Camera, private alertCtrl: AlertController, private data: DataProvider, public af: AngularFire, public loadingCtrl: LoadingController) {
    this.form = {
      lokasikasar: '',
      lokasi: '',
      deskripsi: '',
      telefon: '',
      tindakan: ''
    }
    this.aduanList = af.database.list('/aduanList');
    this.gambaraduanList = firebase.storage().ref('/gambarAduan/');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffLaporKesPage');

    this.authUserIdSub = this.af.auth.subscribe((currentUser) => {
      this.authUserId = currentUser.uid;
    });
    this.authUser = this.af.database.object('/authUsers/'+ this.authUserId);
    this.authUserSub = this.authUser.subscribe((userData) => {
        this.form.nama = userData.name,
        this.form.telefon = userData.number
    });
    // this.getCoord();
  }

  getCoord()
  {
    this.geolocation.getCurrentPosition().then((position) => {

          this.coord = position.coords.latitude + ", " + position.coords.longitude;
          // console.log(this.coord);

        }, (err) => {
          console.log(err);
        });
  }

  uploadGambar()
  {
    this.cameraPlugin.getPicture({
      quality : 95,
      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
      sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
      // sourceType : this.cameraPlugin.PictureSourceType.PHOTOLIBRARY,
      allowEdit : true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      // this.form.picture = imageData;


        let loading = this.loadingCtrl.create({
          content: 'Gambar sedang dimuat naik...'
        })
        loading.present();


      this.gambaraduanList.child(Math.random() + '.png')
      .putString(imageData, 'base64', {contentType: 'image/png'}).then((savedPicture) => {
          loading.dismiss().then(() => {
            this.gambaraduanURL = savedPicture.downloadURL;
            let alert = this.alertCtrl.create({
                  title: 'Berjaya!',
                  subTitle: 'Gambar anda telah dimuat naik',
                  buttons: ['OK']
                });
              alert.present();
          })
        });
    }, error => {
      let alert = this.alertCtrl.create({
            title: 'Gagal!',
            subTitle: 'Gambar anda tidak dimuat naik',
            buttons: ['OK']
          });
          alert.present();
    });
  }


  hantarAplikasi()
  {
    if(this.form.lokasikasar == "" || this.coord == "" || this.form.deskripsi == "" || this.form.telefon == "" || this.form.nama == "" || this.form.tindakan == "")
    {
          let alertfill = this.alertCtrl.create({
      title: 'Perhatian!',
      subTitle: 'Sila lengkapkan semua butiran dahulu',
      buttons: ['Ok']
    });
    alertfill.present();
    }
    else
    {
      if(this.gambaraduanURL == undefined)
      {
        this.gambaraduanURL = "";
      }

      let alertconfirm = this.alertCtrl.create({
        title: 'Pasti hantar?',
        message: 'Sila pastikan maklumat yang disertai adalah benar',
        buttons: [
          {
            text: 'Balik',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'Hantar',
            handler: () => {
              let d = new Date();
              let year = d.getFullYear();
              let month = d.getMonth()+1;
              let day = d.getDate();
              let hour = d.getHours();
              let min = d.getMinutes();
              let ts = day + "/" + month + "/" + year + " " + hour + ":" + min;
              // console.log(ts);

              this.aduanList.push({
                tsid: Date.now(),
                timestamp: ts,
                bulan: month.toString(),
                tahun: year.toString(),
                location: this.form.lokasikasar,
                coord: this.coord,
                deskripsi: this.form.deskripsi,
                telefon: this.form.telefon,
                tindakan: this.form.tindakan,
                nama: this.form.nama,
                gambar: this.gambaraduanURL,
                category: 'Staff'
              })

              this.authUser.update({
                name: this.form.nama,
                number: this.form.telefon
              })
              // console.log('Buy clicked');
              this.navCtrl.pop();
            }
          }
        ]
      });
      alertconfirm.present();
    }

  }

}
