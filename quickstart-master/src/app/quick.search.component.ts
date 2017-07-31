import{Component,OnInit} from '@angular/core'
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import{IInventory}from './inventories';
import{Router} from '@angular/router';
import{InventorySearchService} from './quick.search.service'
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Component({
    selector:"quick-search",
    templateUrl:"./quick.search.component.htm",
    styleUrls:['./quick.search.component.css']
})
export class QuickSearchComponent  implements OnInit{
    title:string="Page is under construction";
    inventories: Observable<IInventory[]>;
    
  private searchTerms = new Subject<string>();
    constructor(
    private inventorySearchService: InventorySearchService,
    private router: Router) {}

 
  search(term: string): void {
    console.log("called"+term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    console.log("called ngInit")
    this.inventories = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()  
      .switchMap(term => term          
        ? this.inventorySearchService.search(term)
      
        : Observable.of<IInventory[]>([]))
      .catch(error => {
        
        console.log(error);
        return Observable.of<IInventory[]>([]);
      });
  }

  gotoDetail(inv: IInventory): void {
    let link = ['/inventory', inv.InventoryId];
    this.router.navigate(link);
  }
}

}