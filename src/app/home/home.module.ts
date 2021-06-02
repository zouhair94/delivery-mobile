import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptHttpClientModule } from '@nativescript/angular'
import { HomeRoutingModule } from './home-route.module'
import { HomeComponent } from './home/home.component'
import { SharedModule } from '@/app/shared/shared.module'

@NgModule({
    declarations: [HomeComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        HomeRoutingModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }