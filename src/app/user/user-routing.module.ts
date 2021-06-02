import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { SigninComponent } from './signin/signin.component'

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SigninComponent
    }
    
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    declarations: [],
    providers: [],
    exports: [NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserRoutingModule { }