
import { ServiceComponent } from './general/service/service.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './general/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductComponent } from './products/product/product.component';
import { HomeComponent } from './general/home/home.component';
import { AboutUsComponent } from './general/about-us/about-us.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ItemSearchComponent } from './item-search/item-search/item-search.component';
// import { OrderComponent } from './orders/order/order.component';
// import { AddProductComponent } from './orders/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { FooterComponent } from './general/footer/footer.component';
import { ContactUsComponent } from './general/contact-us/contact-us.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PapadComponent } from './products/papad/papad.component';
import { PickleComponent } from './products/pickle/pickle.component';
import { NamkeenComponent } from './products/namkeen/namkeen.component';
import { KurkureComponent } from './products/kurkure/kurkure.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

export const routes: Routes = [
    {
        path: '',
       redirectTo: '/home',
       pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
   {
    path: 'product',
    component: ProductComponent
   },
//    {
//     path: 'order',
//     component: OrderComponent
//    },
   {
    path: 'item-search',
    component: ItemSearchComponent
   },
//    {
//     path: 'add',
//     component: AddProductComponent
//    },
   {
    path: 'product-list',
    component:ProductListComponent
   },
   {
    path: 'update',
    component: UpdateProductComponent
   },
   {
    path: 'footer',
    component: FooterComponent
   },
   {
    path: 'contact-us',
    component: ContactUsComponent
   },
   {
    path: 'cart',
    component: AddToCartComponent
   },
   {
    path: 'check-out',
    component: CheckOutComponent
   },
   {
    path: 'papad',
    component: PapadComponent
   },
   {
    path: 'pickle',
    component: PickleComponent
   },
   {
    path: 'namkeen',
    component: NamkeenComponent
   },
   {
    path: 'kurkure',
    component: KurkureComponent
   },
   {
    path: 'item-search',
    component: ItemSearchComponent
   },
   {
    path: 'confirm-order',
    component: OrderConfirmComponent
   }

];
