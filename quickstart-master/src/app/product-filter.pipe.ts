import{Pipe,PipeTransform} from '@angular/core'
import {IInventory} from './inventories'
@Pipe({
name:'invFilter'


})
export class productFilterpipe implements PipeTransform{

    transform(value:IInventory[],filterBy: string):IInventory[]{
        filterBy=filterBy ? filterBy.toLocaleLowerCase():null;
return filterBy ? value.filter((product: IInventory) => 
(product.InventoryName.toLowerCase().indexOf(filterBy) != -1)):value
       
    }
}