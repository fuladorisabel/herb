import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadComponent} from './component/cad/cad.component';
import {InicioComponent } from './component/inicio/inicio.component';
import {CapComponent} from './component/cap/cap.component';
import {Vaq4Component} from './component/vaq4/vaq4.component';
import {Co1Component } from './component/co1/co1.component';
import {Co2Component } from './component/co2/co2.component';
import {Co3Component } from './component/co3/co3.component';
import {Co4Component } from './component/co4/co4.component';
import {Vaq2Component } from './component/vaq2/vaq2.component';
import {Vaq3Component } from './component/vaq3/vaq3.component';
import {Vaq1Component } from './component/vaq1/vaq1.component';
import {Vaf1Component } from './component/vaf1/vaf1.component';
import {Vaf2Component } from './component/vaf2/vaf2.component';
import {Vaf3Component} from './component/vaf3/vaf3.component';
import {Vaf4Component} from './component/vaf4/vaf4.component';

@NgModule({
  declarations: [AppComponent,CapComponent,CadComponent,InicioComponent,Vaf2Component,Vaf3Component,Vaf4Component,Vaq1Component,Vaq4Component,Co1Component,
  Co2Component,Co3Component,Co4Component,Vaq1Component,Vaq2Component,Vaq3Component,Vaf1Component ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
