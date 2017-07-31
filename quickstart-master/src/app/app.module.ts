import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from '@angular/router'
import{FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import{LoginComponent} from './app.login.component';
import {HomeComponent} from './app.home.component';
import{InvetoryModule} from './inventory.module';
import{InventoryService} from './inventory.service';

@NgModule({
  imports:      [ BrowserModule,
  FormsModule,
  InvetoryModule,  
   RouterModule.forRoot(
     [
       {
          path:'',component:LoginComponent
       },
       {
          path:'homePage/:userName',component:HomeComponent
       },
       {
          path:'homePage',component:HomeComponent
       }
     ]

   )],
  declarations: [ AppComponent ,LoginComponent,HomeComponent],
  providers:[InventoryService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
