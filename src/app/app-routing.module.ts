import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeModule } from './home/home.module';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  
  { path: 'address', loadChildren: () => import('./adress/adress.module').then(m => m.AdressModule) },

  { path: 'order', loadChildren: () => import('./order/order.module').then( m => m.OrderModule) }

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
