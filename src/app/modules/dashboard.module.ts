import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashBoardComponent } from '../components/dashboard.component';
import { RandomQuotableComponent } from '../components/quotable/quotable-random.component';
import { QuotableService } from '../shared/services/quotable.service';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { AuthorQuotableComponent } from '../components/quotable/quotable-author.component';
import { ShippmentListComponent } from '../components/shippers/shippers-list.component';
import { ShipperService } from '../shared/services/shipper.service';
const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
   {path:'',
    component:DashBoardComponent
   },
];

@NgModule({
  imports:[
    HttpClientModule,
    TabViewModule,
    TableModule ,
    DialogModule,
    RouterModule.forChild(routes)
],
  declarations:[
    DashBoardComponent,
    RandomQuotableComponent,
    AuthorQuotableComponent,
    ShippmentListComponent
  ],
  exports: [RouterModule],
  providers:[QuotableService,ShipperService
  ]
  ,bootstrap: [RandomQuotableComponent]

})
export class DashBoardModule { }
