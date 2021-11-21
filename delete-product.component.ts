import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { AdminModel } from 'src/Model/AdminModel';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
prodID:number=0;
  constructor(private serSupp:AddService) { }

  ngOnInit(): void {
  }
  btnclick(event:any)
  {
  
    this.prodID=event.suppID;
this.serSupp.deleteProduct(this.prodID);

  }


}
