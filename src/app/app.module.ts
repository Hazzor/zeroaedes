import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';

import { AuthProvider } from '../providers/auth';
import { DataProvider } from '../providers/data';

import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { StaffMenuPage } from '../pages/staff-menu/staff-menu';
import { StaffLaporKesPage } from '../pages/staff-lapor-kes/staff-lapor-kes';
import { StaffSemuaKesPage } from '../pages/staff-semua-kes/staff-semua-kes';
import { StaffStatsPage } from '../pages/staff-stats/staff-stats';
import { StaffSignUpPage } from '../pages/staff-sign-up/staff-sign-up';
import { StaffForgotPasswordPage } from '../pages/staff-forgot-password/staff-forgot-password';
import { StaffButiranKesPage } from '../pages/staff-butiran-kes/staff-butiran-kes';

// import {Calendar} from '@ionic-native/calendar';

import { InfoAedesPage } from '../pages/info-aedes/info-aedes';
import { AppPenghalauPage } from '../pages/app-penghalau/app-penghalau';

import { StudEAduanPage } from '../pages/stud-e-aduan/stud-e-aduan';
import { StudMenuPage } from '../pages/stud-menu/stud-menu';
import { StudStatusAduanPage } from '../pages/stud-status-aduan/stud-status-aduan';
import { StudButiranAduanPage } from '../pages/stud-butiran-aduan/stud-butiran-aduan';

var config = {
  apiKey: "AIzaSyBpGFyWITGAFILlFnuW33mZXfFbOPqSdkI",
  authDomain: "muckeapp-7ada6.firebaseapp.com",
  databaseURL: "https://muckeapp-7ada6.firebaseio.com",
  projectId: "muckeapp-7ada6",
  storageBucket: "muckeapp-7ada6.appspot.com",
  messagingSenderId: "425189334779"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    StaffMenuPage,
    StaffLaporKesPage,
    StaffSemuaKesPage,
    StaffStatsPage,
    StaffSignUpPage,
    StaffForgotPasswordPage,
    StaffButiranKesPage,
    InfoAedesPage,
    AppPenghalauPage,
    StudEAduanPage,
    StudMenuPage,
    StudStatusAduanPage,
    StudButiranAduanPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    StaffMenuPage,
    StaffLaporKesPage,
    StaffSemuaKesPage,
    StaffStatsPage,
    StaffSignUpPage,
    StaffForgotPasswordPage,
    StaffButiranKesPage,
    InfoAedesPage,
    AppPenghalauPage,
    StudEAduanPage,
    StudMenuPage,
    StudStatusAduanPage,
    StudButiranAduanPage
  ],
  providers: [,DataProvider,AuthProvider,StatusBar,SplashScreen,Geolocation,Camera,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
