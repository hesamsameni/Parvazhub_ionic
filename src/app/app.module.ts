import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetFlightListProvider } from '../providers/get-flight-list/get-flight-list';
import { FlightsPage } from '../pages/flights/flights';
import { SellersPage } from '../pages/sellers/sellers';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { CommonModule } from '@angular/common'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlightsPage,
    SellersPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
    HttpClientModule,
    HttpModule,
    DpDatePickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlightsPage,
    SellersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetFlightListProvider
  ]
})
export class AppModule {}
