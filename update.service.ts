import { Injectable } from '@angular/core';
import { Update } from 'src/Model/update';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  // public api='https://localhost:44315/api/Product/ProductUpdate';
  public api='https://localhost:44315/api/Product/ProductInsert';
  mystatus:number=0;
  public getapi='https://localhost:44315/api/';
  
  constructor(private http:HttpClient,private r:Router) { }
  
updateproduct(Register1:Update){
  console.log("RegistrationData");
  console.log(Register1.ProductId);
  this.http.post(this.api,Register1).subscribe(
    (i:any) => { console.log(i.status);
      if(i.status==200)
        {this.r.navigate(['/adminproductlist'])
      alert("your product is updated");}
        else{
         // this.r.navigate(['/wrong-user']);
        alert("product is not updated");
        }
        return i.status;}
     
    );
}
}