import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http : HttpClient) { }

  public LoadData(){
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const response = this.http.get(url).map(res => res.json());
    return response;
  }
}
