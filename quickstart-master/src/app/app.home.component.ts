import{Component,OnInit} from '@angular/core'
import{ActivatedRoute} from '@angular/router'
import{Router} from '@angular/router'
@Component({
    templateUrl:'./homePage.html',
    styleUrls:['./home.style.css']  

})
export class HomeComponent  implements OnInit{
userName:string="";
  constructor(private _route:ActivatedRoute,private _router:Router){}

ngOnInit():void{

let name=this._route.params.subscribe( params => this.userName = params['userName']);

    console.log(this.userName +"ersdfgh");

    
    console.log(this.userName);

}
}