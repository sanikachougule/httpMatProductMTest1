import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductComponent } from './shared/components/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component:ProductDashboardComponent
  },
  {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
  },
  {
    path: 'products/addproduct',
    component:ProductFormComponent
  },
  {
    path: 'products/:productId',
    component:ProductComponent
  },
  {
    path: 'products/:productId/edit',
    component:ProductFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
