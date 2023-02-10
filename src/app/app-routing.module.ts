import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
// all-products
{
  path:'',component:HomeComponent
},
{
  path:'all-products',component:AllProductComponent
},
{
  path:'wishlist',component:WishlistComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'contact',component:ContactComponent 
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
