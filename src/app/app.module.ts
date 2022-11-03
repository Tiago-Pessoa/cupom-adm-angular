import {DEFAULT_CURRENCY_CODE, LOCALE_ID,  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CpbAdmComponent } from './cpb-adm/cpb-adm.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CpbAdmComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule




  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
