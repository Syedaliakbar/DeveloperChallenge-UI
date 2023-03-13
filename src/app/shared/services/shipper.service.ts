import {HttpClient} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core';
import { ShipmentVm } from '../models/shippment.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { ShipperVm } from '../models/shippers-model';
import { AppSettings } from './api-settings';
@Injectable()
export class ShipperService{
    private http: HttpClient;
    constructor(@Inject(HttpClient) http: HttpClient)
    {
        this.http = http;
    }
    getShippers() :Observable<ShipperVm[]>{
        let shipperList : ShipperVm[] =[];
        let url= AppSettings.API_ENDPOINT+ "/Shippment/List/";
        return this.http.get<ResponseModel>(url).pipe(
            map((data : ResponseModel) => {
                data.data?.forEach(function(value:ShipmentVm) {
                    shipperList.push(ShipperVm.fromJS(value));
                });
                return shipperList;
            }),
            catchError((err=>{
                throw err;
            }))
        )
    }
    getShipmentById(id:number) :Observable<ShipmentVm[]>{
        let shipmentList : ShipmentVm[] =[];
        let url= AppSettings.API_ENDPOINT+ "/Shippment/GetById/"+id;
        return this.http.get<ResponseModel>(url).pipe(
            map((data : ResponseModel) => {
                debugger;
                data.data?.forEach(function(value:ShipmentVm) {
                    shipmentList.push(ShipmentVm.fromJS(value));
                });
                return shipmentList;
            }),
            catchError((err=>{
                throw err;
            }))
        )
    }
}