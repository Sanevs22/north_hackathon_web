import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryComponent } from './pages/registry/registry.component';
import { HomeComponent } from './pages/home/home.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { MobileContComponent } from './pages/mobile-cont/mobile-cont.component';
import { MobilePartComponent } from './pages/mobile-part/mobile-part.component';

const routes: Routes =  [
  { path: '', component: HomeComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'parthner', component: PartnerComponent },
  { path: 'control', component: MobileContComponent },
  { path: 'partmoby', component: MobilePartComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
