import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { AdressRouteModule } from './adress-route.module'
import { NewComponent } from './new/new.component'

@NgModule({
    imports:[AdressRouteModule],
    exports:[],
    declarations:[NewComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AdressModule { }