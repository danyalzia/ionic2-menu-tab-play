import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { YoutubePage } from '../youtube/youtube';
import { WikipediaPage } from '../wikipedia/wikipedia';
import { JsonparserPage } from '../jsonparser/jsonparser';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root: any = YoutubePage;
  tab2Root: any = WikipediaPage;
  tab3Root: any = JsonparserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
