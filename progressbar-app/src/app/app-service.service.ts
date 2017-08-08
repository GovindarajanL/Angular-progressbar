import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from "rxjs/Observable";
@Injectable()
export class AppServiceService {

  constructor(private _http: Http) { }

  public getDataForProgress(): Observable<any>{
    const headers = new Headers();
    console.log('in get data for progress');
    headers.append('content-type','application/json');
    return this._http.get('http://pb-api.herokuapp.com/bars',{headers:headers})
    //.map(this.extractData)
    //.catch(this.handleError);
  }

  public extractData(res:Response){
    const response = res.json;
    console.log('extract data');
    if(res.status != 200)
    {
      throw new Error('bad response status'+ res.status);
    }
    console.log(response);
    return response;
  }

  public handleError(error: Response){
    console.log('in jhandle error');
    return Observable.throw(error);
  }

}
