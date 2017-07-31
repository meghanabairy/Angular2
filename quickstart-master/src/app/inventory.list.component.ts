

import { Location }                 from '@angular/common';
import {Component,OnInit} from '@angular/core'

import{IInventory} from './inventories'
import {InventoryService} from './inventory.service'

@Component({
    selector :'pm-products',    
    templateUrl:'./product-list.component.htm'
    
})

export class InventoryListComponent implements OnInit{

pageTitle:String ="Inventories List"
imageWidth:number=50
imageMargin:number=2
showImage:boolean=false
listFilter:string=""
totalAmount:number=0
inventories:IInventory[]
errorMessage:string

constructor (private inventoryService:InventoryService,private location:Location){
    
}
toggleImage():void{
    this.showImage= !this.showImage;
// return this.showImage;
}
ngOnInit():void{
    console.log("called and hence error");
    this.inventoryService.getProducts().subscribe(inventories => this.inventories= inventories,
    error => this.errorMessage = <any> error);
console.log("tested"+this.inventories);





}

onRatingClicked(ratingClicked:string):void{
    this.pageTitle=ratingClicked
}

goBack(): void {
  this.location.back();
}

}   