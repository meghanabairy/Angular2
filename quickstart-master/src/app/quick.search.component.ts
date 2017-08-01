import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import{INVS} from './inventories.constant'

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { InventorySearchService } from './quick.search.service';
import { IInventory } from './inventories';

@Component({
  selector: 'hero-search',
  templateUrl: './quick.search.component.htm',
  styleUrls: [ './quick.search.component.css' ],
  providers: [InventorySearchService]
})
export class QuickSearchComponent{
  inventories: Observable<IInventory[]>;
    constructor(
    private inventorySearchService: InventorySearchService,
    public http: Http,
    private router: Router) {}
  gotoDetail(hero: IInventory): void {
    let link = ['/detail', hero.InventoryId];
    this.router.navigate(link);
  }    
  observableSource = (keyword: any): Observable<IInventory[]> => {  
  
    if (keyword) {
//return Observable.fromPromise(Promise.resolve(INVS).then(heroes => heroes.filter((inv : IInventory) =>
  // {
    // console.log("called innermost") ;
    //return  (inv.InventoryName.toLowerCase().startsWith(keyword.toLowerCase()))
   //})));

   return Observable.fromPromise(Promise.resolve(INVS).then(heroes => heroes.filter((inv : IInventory) =>
   {
     console.log("called innermost") ;
    return  (inv.InventoryName.toLowerCase().startsWith(keyword.toLowerCase()))
   })));



    } else {
      return Observable.of([]);
    }
  }


onBack():void{
    this.router.navigate(['/inventories'])
}
goHome():void{
    this.router.navigate(['/homePage']);
}

}

