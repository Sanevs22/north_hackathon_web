import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { HomeComponent } from './pages/home/home.component';
import { TuiButtonModule,TuiDataListModule  } from '@taiga-ui/core';
import {TuiIslandModule, TuiTagModule, TuiInputModule, TuiDataListWrapperModule, TuiMultiSelectModule, TuiCheckboxLabeledModule
, TuiInputDateModule} from '@taiga-ui/kit';
import {TuiTableModule, TuiTableFiltersModule, } from '@taiga-ui/addon-table';
import { MobileContComponent } from './pages/mobile-cont/mobile-cont.component';
import { MobilePartComponent } from './pages/mobile-part/mobile-part.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent, RegistryComponent, PartnerComponent, HomeComponent, MobileContComponent, MobilePartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiTableModule,
    TuiTagModule,
    TuiTableFiltersModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
