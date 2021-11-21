import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';
import { AdminModel } from 'src/Model/AdminModel';
@Injectable({
  providedIn: 'root'
})
export class InsertService {

   public api="https://localhost:44315/api/Product/ProductInsert";
  mystatus:number=0;
   public getapi="https://localhost:44315/api/";

   constructor(private http:HttpClient,private r:Router) { }
//   postlogin(registerdata:AdminModel){
//     let endpoints="Product/ProductInsert";
//     // let loginStatus:boolean=false;
//     this.http.post(this.getapi+endpoints,registerdata).subscribe(
//       (i:any) => { console.log(i.status);
//         if(i.status==200)
//           {this.r.navigate(['/customerlogin']);}
//           else{
//             this.r.navigate(['/wrong-user']);
          
//           }
//           return i.status;}
       
//       );
// }
insertproduct(Register:AdminModel){
  console.log("RegistrationData");
  console.log(Register.ProductName);
  this.http.post(this.getapi,Register).subscribe(
    (i:any) => { console.log(i.status);
      if(i.status==200)
        {this.r.navigate(['/adminshowlist']);
        alert('product inserted');}
        else{
         // this.r.navigate(['/wrong-us']);
        alert('product not inserted');
        }
        return i.status;}
     
    );
}
}