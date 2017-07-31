import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IInventory }           from './inventories';

@Injectable()
export class InventorySearchService {

private url:string="./app/inventories.json"
  constructor(private http: Http) {}

  search(term: string): Observable<IInventory[]> {
    console.log("called service"+term)
    return this.http
               .get(`./app/inventories.json/?inventoryName=${term}`)
               .map(response => response.json().data as IInventory[]);
  }

 
}