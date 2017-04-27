import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { AngularFire , FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2';
import { Chart } from 'chart.js';
/*
  Generated class for the StaffStats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-staff-stats',
  templateUrl: 'staff-stats.html'
})

export class StaffStatsPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas;

  queryObservable : any;
  lineChart: any;

  jumlah: number;
  jumlahtelah: number;
  jumlahbelum: number;

  tahun: any;
  bulan: any;

  cjan: number = 0;
  cfeb: number = 0;
  cmac: number = 0;
  capr: number = 0;
  cmay: number = 0;
  cjun: number = 0;
  cjul: number = 0;
  caug: number = 0;
  csep: number = 0;
  coct: number = 0;
  cnov: number = 0;
  cdec: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffStatsPage');
  }

  updateData()
  {
    if(this.lineChart !== undefined){
      this.lineChart.destroy();
    }

    this.cjan = 0;
    this.cfeb = 0;
    this.cmac = 0;
    this.capr = 0;
    this.cmay = 0;
    this.cjun = 0;
    this.cjul = 0;
    this.caug = 0;
    this.csep = 0;
    this.coct = 0;
    this.cnov = 0;
    this.cdec = 0;


     this.queryObservable.map((firebaseAduans) => {
      return firebaseAduans.filter((aduans) => {
        // let tahun = parseInt(this.tahun);
        return aduans.tahun === this.tahun
      })
    }).subscribe((aduans) => {

        aduans.forEach((satu) => {
        if(satu.bulan == 1)
        {
          this.cjan = this.cjan+1;
        }
        else if(satu.bulan == 2)
        {
          this.cfeb = this.cfeb+1;
        }
        else if(satu.bulan == 3)
        {
          this.cmac = this.cmac+1;
        }
        else if(satu.bulan == 4)
        {
          this.capr = this.capr+1;
        }
        else if(satu.bulan == 5)
        {
          this.cmay = this.cmay+1;
        }
        else if(satu.bulan == 6)
        {
          this.cjun = this.cjun+1;
        }
        else if(satu.bulan == 7)
        {
          this.cjul = this.cjul+1;
        }
        else if(satu.bulan == 8)
        {
          this.caug = this.caug+1;
        }
        else if(satu.bulan == 9)
        {
          this.csep = this.csep+1;
        }
        else if(satu.bulan == 10)
        {
          this.coct = this.coct+1;
        }
        else if(satu.bulan == 11)
        {
          this.cnov = this.cnov+1;
        }
        else if(satu.bulan == 12)
        {
          this.cdec = this.cdec+1;
        }
        // console.log(this.capr);
      })
    });
    // console.log(this.capr);
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Bilangan Aduan",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [this.cjan, this.cfeb, this.cmac, this.capr, this.cmay, this.cjun, this.cjul, this.caug, this.csep, this.coct, this.cnov, this.cdec],
                    spanGaps: false,
                }
            ]
        }

    });
    // console.log(this.capr);
    // console.log(this.lineChart);
}


  ngOnInit()
  {
    let d = new Date();
    this.tahun = d.getFullYear().toString();
    this.queryObservable = this.af.database.list('/aduanList');

    let loading = this.loadingCtrl.create({
      content: 'Sila tunggu...'
    });

    loading.present();

    this.queryObservable.map((kirajumlah) => {
      return kirajumlah
    }).subscribe((adn0) => {
      this.jumlah = adn0.length;
    })

    this.queryObservable.map((kiratelah) => {
      return kiratelah.filter((telah) => {
        return telah.tindakan === "Ya"
      })
    }).subscribe((adn1) => {
      this.jumlahtelah = adn1.length;
    })

    this.queryObservable.map((kirabelum) => {
      return kirabelum.filter((belum) => {
        return belum.tindakan === "Tidak"
      })
    }).subscribe((adn2) => {
      this.jumlahbelum = adn2.length;
      setTimeout(() => {
        this.updateData();
      }, 1)
      loading.dismiss();
    })
}

}
