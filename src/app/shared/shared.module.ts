import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { FloatingBtnComponent } from '@/app/shared/components/floating-btn/floating-btn.component'
import {MenuComponent} from '@/app/shared/components/menu/menu.component'
import {components} from '@/app/shared/components'
import { NativeScriptPickerModule } from "@nativescript/picker/angular";


@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptPickerModule],
    exports: [
        components
    ],
    declarations: [
        components
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }