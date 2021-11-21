import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminModel } from 'src/Model/AdminModel';
import { InsertService } from '../insert.service';
@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {

  RegisterForm=new FormGroup({
    ProductName:new FormControl(),
          ActualPrice:new FormControl(),
        Discount:new FormControl(),
         Quantity:new FormControl(),
         Description:new FormControl(),
         ProductImage:new FormControl(),
         CategoryId:new FormControl(),
    
      });
  constructor(private m1:InsertService) { }

  ngOnInit(): void {
  }
  SubmitData()
  {
  console.log(this.RegisterForm.value);
   let registerdet:AdminModel=new AdminModel();
   registerdet.ProductName=this.RegisterForm.value["ProductName"];
   registerdet.ActualPrice=this.RegisterForm.value["ActualPrice"];
   registerdet.Discount=this.RegisterForm.value["Discount"];
   registerdet.Quantity=this.RegisterForm.value["Quantity"];
   registerdet.Description=this.RegisterForm.value["Description"];
   registerdet.Image=this.RegisterForm.value["ProductImage"];
   registerdet.CategoryId=this.RegisterForm.value["CategoryId"];
  //  console.log("SendingData"+registerdet.Name);
   this.m1.insertproduct(registerdet);
   
}
}