import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';

const route = [
    {
        path: '',
        component:  MainComponent
    },
    {
        path: 'add',
        component: AddComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(route)],
    exports: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class OrderRouteModule { }