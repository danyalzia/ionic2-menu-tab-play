import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { YoutubePage } from '../pages/youtube/youtube';
import { WikipediaPage } from '../pages/wikipedia/wikipedia';

import { youTubeServiceInjectables } from '../pages/youtube/youtube';
import { SearchResultComponent } from '../pages/youtube/youtube';
import { SearchBox } from '../pages/youtube/youtube';

import { WikipediaService } from '../pages/wikipedia/wikipedia.service';

import { JsonpModule } from '@angular/http';

import { JsonparserPage } from '../pages/jsonparser/jsonparser';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    YoutubePage,
    WikipediaPage,
	SearchResultComponent,
	SearchBox,
	JsonparserPage,
	TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
	tabsPlacement: 'bottom',
	  platforms: {
		android: {
		  tabsPlacement: 'top'
		},
		ios: {
		  tabsPlacement: 'top'
		},
		windows:
		{
		  tabsPlacement: 'top'
		}
	  }
	}),
	JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YoutubePage,
    WikipediaPage,
	SearchResultComponent,
	SearchBox,
	JsonparserPage,
	TabsPage
  ],
  providers: [youTubeServiceInjectables, WikipediaService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
