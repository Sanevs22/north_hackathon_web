import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [AppComponent, RegistryComponent, PartnerComponent, HomeComponent],
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
    TuiInputDateModule
  ],
  exports: [],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
