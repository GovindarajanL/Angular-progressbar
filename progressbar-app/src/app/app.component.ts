import { Component } from '@angular/core';
import {AppServiceService} from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServiceService]
})
export class AppComponent {
  public dataresp: jsonvo = new jsonvo;
  public selected:string = "";
  constructor(private appservice:AppServiceService)
  {
    this.appservice.getDataForProgress().subscribe(
      _response => {
        console.log('in compo',_response);
        this.dataresp = JSON.parse(_response._body);
      }
    );
    
  }

  adjust(value:number,id:string)
  {
    var selected = document.getElementById(id).getAttribute("value");
    var selectedInt = Number.parseInt(selected);
    var dataToSet = (selectedInt+value);
    document.getElementById(id).setAttribute("value",dataToSet.toString());
    var barnum:string[] = id.split("progress");
    var divid:string = "div"+barnum[1];
    

    if((selectedInt+value) > 0)
      {
        document.getElementById(divid).innerText = dataToSet.toString();
      }
    else
    {
      document.getElementById(divid).innerText = "0";
    }
    document.getElementById(divid).innerText = dataToSet.toString();
    
    if(this.dataresp.limit < (selectedInt+value))
    {
        document.getElementById(id).style.color="red";
    }
    else
    {
        document.getElementById(id).style.color="blue";
    }
    console.log('selected button',selected);
  }
  
  
}

class jsonvo{
  buttons:string[];
  bars:string[];
  limit:number;
}