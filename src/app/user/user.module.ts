import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { LoginComponent } from './login/login.component'
import { UserRoutingModule } from './user-routing.module'
import { SigninComponent } from './signin/signin.component'

@NgModule({
    imports: [NativeScriptCommonModule,NativeScriptFormsModule, UserRoutingModule],
    declarations: [LoginComponent, SigninComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }