import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ResearchApp } from './app.component';
import { BotPage } from '../pages/bot/bot';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//additional imports
import { HttpModule } from '@angular/http';
import { BotServiceProvider } from '../providers/bot-service/bot-service';

@NgModule({
  declarations: [
    ResearchApp,
    BotPage,
    ListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(ResearchApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ResearchApp,
    BotPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BotServiceProvider
  ]
})
export class AppModule {}
