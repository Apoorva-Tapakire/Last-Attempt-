import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/Model/AdminModel';
import {HttpClient} from '@angular/common/http';

import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminPortalService {
  public getApi:string="https://localhost:44315/api/Product/showProduct";
  constructor(private http:HttpClient) { }



  getEvents():Observable<Array<AdminModel>>{
    return this.http.get<Array<AdminModel>>(this.getApi);
  }
}