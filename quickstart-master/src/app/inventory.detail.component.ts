import{Component,Input,OnInit} from '@angular/core'
import{IInventory} from './inventories'
import{ActivatedRoute,ParamMap} from '@angular/router'
import{Router} from '@angular/router'
import 'rxjs/add/operator/switchMap';

import {InventoryService} from './inventory.service'
@Component({
   
    templateUrl:'./product-detail.component.html'

})
export class InventoryDetailComponent implements OnInit{
    title:string ='Inventory Detail Page'
    @Input() inventory:IInventory
    errorMessage:string;
    inventoriesList:IInventory[];
    inventoryId:string=""
   
    constructor(private _route:ActivatedRoute,private _router:Router,private inventoryService:InventoryService){}

ngOnInit():void{
  this._route.paramMap
    .switchMap((params: ParamMap) => this.inventoryService.getInventory(+params.get('InventoryId')))
    .subscribe(inv => {this.inventory = inv;console.log(this.inventory)});
    
}

onBack():void{
    this._router.navigate(['/inventories'])
}
goHome():void{
    this._router.navigate(['/homePage']);
}

}