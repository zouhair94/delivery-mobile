import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { Routes } from '@angular/router';
import {NewComponent} from './new/new.component';
import {MainComponent} from './main/main.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
        {
            path: 'new',
            component: NewComponent
        },
        {
            path : "",
            component: MainComponent
        },
        {
            path: "search",
            component: SearchComponent
        }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AdressRouteModule { }