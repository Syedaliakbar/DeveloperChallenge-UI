import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../components/app.component';
import { DashBoardModule} from './dashboard.module'
import { DashBoardComponent } from '../components/dashboard.component';
const routes: Routes = [];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule,
    RouterModule.forRoot([
     {path:'',redirectTo:'dashboard',pathMatch:'full'},
     {path:'dashboard',
     component:AppComponent,
     loadChildren: ()=> import('./dashboard.module').then(module=> module.DashBoardModule)
  },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
