import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular';

/* import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component' */
import { HomeModule } from './home/home.module'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*   { path: 'items', component: ItemsComponent },
    { path: 'item/:id', component: ItemDetailComponent }, */
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'address', loadChildren: () => import('./adress/adress.module').then(m => m.AdressModule) }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
