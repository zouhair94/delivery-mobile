import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from '@/app/shared/shared.module'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
           NativeScriptModule,
           AppRoutingModule,
           NativeScriptFormsModule, 
           SharedModule
          ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
