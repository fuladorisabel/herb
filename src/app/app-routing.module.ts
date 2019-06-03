import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadComponent } from './component/cad/cad.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { CapComponent } from './component/cap/cap.component';
import { Vaq4Component } from './component/vaq4/vaq4.component';
import { Co1Component } from './component/co1/co1.component';
import { Co2Component } from './component/co2/co2.component';
import { Co3Component } from './component/co3/co3.component';
import { Co4Component } from './component/co4/co4.component';
import { Vaq2Component } from './component/vaq2/vaq2.component';
import { Vaq3Component } from './component/vaq3/vaq3.component';
import { Vaq1Component } from './component/vaq1/vaq1.component';
import { Vaf1Component } from './component/vaf1/vaf1.component';
import { Vaf2Component } from './component/vaf2/vaf2.component';
import { Vaf3Component } from './component/vaf3/vaf3.component';
import { Vaf4Component } from './component/vaf4/vaf4.component';
import { QComponent } from './component/q/q.component';
import { FComponent } from './component/f/f.component';
import { CComponent } from './component/c/c.component';

const routes: Routes = [
  { path: '', redirectTo: 'cap', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cap', component: CapComponent },
  { path: 'cad', component: CadComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'vaf1', component: Vaf1Component },
  { path: 'vaf2', component: Vaf2Component },
  { path: 'vaf3', component: Vaf3Component },
  { path: 'vaf4', component: Vaf4Component },
  { path: 'vaq4', component: Vaq4Component },
  { path: 'co1', component: Co1Component },
  { path: 'co2', component: Co2Component },
  { path: 'co3', component: Co3Component },
  { path: 'co4', component: Co4Component },
  { path: 'vaq1', component: Vaq1Component },
  { path: 'vaq2', component: Vaq2Component },
  { path: 'vaq3', component: Vaq3Component },
  { path: 'vaq4', component: Vaq4Component },
  { path: 'q', component: QComponent },
    { path: 'f', component: FComponent },
      { path: 'c', component: CComponent },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
