import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LifeCycleHooks';
  isvisible=true;
  datachange(data:any){
  this.title=data
  }
  showhide(){
 this.isvisible=!this.isvisible
  }
}
