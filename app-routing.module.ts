import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminShowListComponent } from './admin-show-list/admin-show-list.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { InsertproductComponent } from './insertproduct/insertproduct.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';


const routes: Routes = [
  {path:'AdminShowList',component:AdminShowListComponent},
 {path:'AddProduct',component:AddProductComponent},
 {path:'DeleteProduct',component:DeleteProductComponent},
 {path:'Productupdate',component:ProductupdateComponent},
 {path:'InsertProduct',component:InsertproductComponent}
];

export default routes;
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
