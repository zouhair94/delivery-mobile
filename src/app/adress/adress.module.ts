import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { AdressRouteModule } from './adress-route.module'
import { NewComponent } from './new/new.component'
import { SearchComponent } from './search/search.component'

@NgModule({
    imports:[AdressRouteModule, NativeScriptCommonModule, NativeScriptFormsModule],
    exports:[],
    declarations:[NewComponent,SearchComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AdressModule { }