import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'page-wikipedia',
  templateUrl: 'wikipedia.html'
})
export class WikipediaPage {

  constructor(private wikipediaService: WikipediaService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WikipediaPage');
  }
  
  items: Array<string>;
  
  Jsonitems: Array<string>;
  
  searchKey(input) {
    this.wikipediaService.searchKey(input).then(items => this.items = items);
  }  
  
}
