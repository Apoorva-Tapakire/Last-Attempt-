import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/Model/AdminModel';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
@Injectable({
  providedIn: 'root'
})
export class AddService {
  deleteProduct(prodID: number) {
    throw new Error('Method not implemented.');
  }
  // deleteProduct(prodID: number) {
  //   throw new Error('Method not implemented.');
  // }
  // deleteProduct(prodID: number) {
  //   throw new Error('Method not implemented.');
  // }
  // deleteProduct(prodID: number) {
  //   throw new Error('Method not implemented.');
  // }

  

  public api = 'https://localhost:44315/api/Product/ProductInsert';
  mystatus:number=0;
  public postAPI='https://localhost:44315/api/';

  // public postAPI='https://localhost:44315/api';


  constructor(private http:HttpClient, private r:Router) { }

postSupplierData(supplier:AdminModel)
{
  let endpoints="Product/ProductInsert";
  let ProductStatus:boolean=true;
  // this.http.post(this.postAPI + endpoints, AdminModel).subscribe(data => {
  //   console.log(data);
  // });
  // alert("Done");
  this.http.post(this.postAPI + endpoints, AdminModel).subscribe(
    (i:any)=>{console.log(i.status);
    if(i.status==200)
    {
      alert("inserted");
    }
  }
  );
  
  }
}



// deleteSupplier(id:number)
//   {
//   let endPoints="Product/ProductDelete"
//     return this.http.delete(this.api + id).subscribe(data => {
//       console.log(data);
//     });

//   }


