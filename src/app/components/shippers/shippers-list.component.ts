import { Component } from '@angular/core';
import { ShipperVm } from 'src/app/shared/models/shippers-model';
import { ShipmentVm } from 'src/app/shared/models/shippment.model';
import { ShipperService } from 'src/app/shared/services/shipper.service';

@Component({
  selector: 'shippers-list',
  templateUrl: './shippers-list.component.html',
  styleUrls: ['./shippers-list.component.scss']
})
export class ShippmentListComponent {
  shippers : ShipperVm[] =[];
  shipments : ShipmentVm[] =[];
  show:boolean = false;
  constructor(
    private shipperService: ShipperService )
  {
  }
  ngOnInit(): void
  {
    this.getShipperList();
  }
  getShipperList()
  {
    this.shippers =[];
    this.shipperService.getShippers().subscribe(res => {
      if(res && res != null)
      { 
        this.shippers = res;
      }
    })
   }
   getShippmentById(id:number)
   {
    this.shipments =[];
    this.shipperService.getShipmentById(id).subscribe(res => {
      if(res && res != null)
      { 
        this.show = true;
        this.shipments = res;
      }
    })
   }
}