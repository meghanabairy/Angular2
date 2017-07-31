import{Pipe,PipeTransform} from '@angular/core'
import {IInventory} from './inventories'
@Pipe({
name:'itemCodeFilter'


})
export class PipeItemCodeFilter implements PipeTransform{

    transform(value:IInventory[],filterBy: string):IInventory[]{
return value;
       
    }
}