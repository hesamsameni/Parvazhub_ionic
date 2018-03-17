import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
  //     this.ga.startTrackerWithId('UA-98799589-3')
  //  .then(() => {
  //    console.log('Google analytics is ready now');
  //       this.ga.trackView('test');
  //    // Tracker is ready
  //    // You can now track pages or set additional information such as AppVersion or UserId
  //  })
  //  .catch(e => console.log('Error starting GoogleAnalytics', e));
    });
  }
}

