import{NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import{InventoryListComponent} from './inventory.list.component'
import{InventoryService}  from './inventory.service';
import{productFilterpipe} from './product-filter.pipe';
import{PipeItemCodeFilter} from './product-itemCodeFilter.pipe';
import {HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
import{InventoryDetailComponent} from './inventory.detail.component'
@NgModule({
    imports:[
     FormsModule,
      HttpModule,
     CommonModule,
       RouterModule.forChild([
             {path:'inventories', component:InventoryListComponent}, 
             {path:'inventory/:InventoryId',               
                 component:InventoryDetailComponent}, 
                 ])
             ],
    declarations: [
                InventoryListComponent, 
                productFilterpipe,
                PipeItemCodeFilter,
                InventoryDetailComponent
                  ],
                  providers:[InventoryService]
 
  
  
})
export class InvetoryModule{

}