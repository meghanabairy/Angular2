import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {IInventory} from './inventories'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/toPromise';
import{INVS} from './inventories.constant'

@Injectable()
export class InventoryService{
private url:string="./app/inventories.json"
public constructor(private _http:Http){}
getProducts():Observable<IInventory[]>{
 return this._http.get(this.url).map((response:Response) => <IInventory[]> response.json() )
 .catch(this.handleError)
}

private  handleError(error:Response){
    console.log(error);
    return Observable.throw(error.json().error || 'server error')
}
 getInventories(): Promise<IInventory[]> {
     console.log("called from HeroService");       
    return Promise.resolve(INVS);
  }
  getInventory(id: number): Promise<IInventory> {
      console.log("called getHero");
  return this.getInventories()
             .then(heroes => heroes.find(hero => hero.InventoryId === id));
}
 


 
}