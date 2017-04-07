import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { StaffMenuPage } from '../pages/staff-menu/staff-menu';
import { StaffLaporKesPage } from '../pages/staff-lapor-kes/staff-lapor-kes';
import { StaffSemuaKesPage } from '../pages/staff-semua-kes/staff-semua-kes';
import { StaffStatsPage } from '../pages/staff-stats/staff-stats';
import { StaffSignUpPage } from '../pages/staff-sign-up/staff-sign-up';
import { StaffForgotPasswordPage } from '../pages/staff-forgot-password/staff-forgot-password';
import { StaffButiranKesPage } from '../pages/staff-butiran-kes/staff-butiran-kes';


import { InfoAedesPage } from '../pages/info-aedes/info-aedes';
import { AppPenghalauPage } from '../pages/app-penghalau/app-penghalau';

import { StudEAduanPage } from '../pages/stud-e-aduan/stud-e-aduan';
import { StudMenuPage } from '../pages/stud-menu/stud-menu';
import { StudStatusAduanPage } from '../pages/stud-status-aduan/stud-status-aduan';
import { StudButiranAduanPage } from '../pages/stud-butiran-aduan/stud-butiran-aduan';




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
    IonicModule.forRoot(MyApp)
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
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
