import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OfferComponent } from './offer/offer.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '' , redirectTo:'products' , pathMatch:'full'} ,
  {path: 'products' , component: ProductComponent } , 
  {path: 'offers' , component: OfferComponent } , 
  {path:'**' , component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
