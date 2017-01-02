import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'page-jsonparser',
  templateUrl: 'jsonparser.html'
})
export class JsonparserPage {

  constructor(private jsonp: Jsonp, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonparserPage');
  }
  
  getData() {
        this.jsonp.get('http://chartapi.finance.yahoo.com/instrument/1.0/NFLX/chartdata;type=quote;range=1d/json/?callback=JSONP_CALLBACK')
        .map(res => res.json())
        .subscribe(data => console.log(data));
  } 
}
