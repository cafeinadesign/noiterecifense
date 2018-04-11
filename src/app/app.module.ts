import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BaladaPage } from '../pages/balada/balada';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCAbeiF9d0Mgn6SAnnD0D2DwGSTWuYswCg",
  authDomain: "noiterecifense.firebaseapp.com",
  databaseURL: "https://noiterecifense.firebaseio.com",
  projectId: "project-6474842309359176776",
  storageBucket: "project-6474842309359176776.appspot.com",
  messagingSenderId: "681822354983"
};

@NgModule({
  declarations: [
    MyApp,
    BaladaPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BaladaPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    /*StatusBar,*/
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
