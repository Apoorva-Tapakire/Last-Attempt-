import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/Model/AdminModel';
import { AdminPortalService } from '../admin-portal.service';
@Component({
  selector: 'app-admin-show-list',
  templateUrl: './admin-show-list.component.html',
  styleUrls: ['./admin-show-list.component.css']
})
export class AdminShowListComponent implements OnInit {

  productdata: Array<AdminModel>=[];
  constructor(private s:AdminPortalService) { }
  ngOnInit(): void {
    this.s.getEvents().subscribe(data => {
      this.productdata = data;
    });
  }
}