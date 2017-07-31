import{Component} from '@angular/core';
import{Router} from '@angular/router'
@Component({
    templateUrl:'./app.login.html'
})
export class LoginComponent{

userName:string;
constructor(private _route:Router){}
    login():void{
this._route.navigate(['/homePage',this.userName]);
console.log(this.userName);
    }

}