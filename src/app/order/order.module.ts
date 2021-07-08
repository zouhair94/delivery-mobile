import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { OrderRouteModule } from "./order.routing.module";
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';

@NgModule({
    
    imports: [
                OrderRouteModule,
                NativeScriptCommonModule,
                NativeScriptFormsModule,
            ],
    declarations: [MainComponent, AddComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class OrderModule{

}