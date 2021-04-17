import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
 private tab:string[]=["Samsung","Nokia","HP"];
 private users:any;

 private url = "https://reqres.in/api/users";

  constructor(private http:HttpClient) { }

  public getProviders()
  {
    return this.tab;
  }

  public getUser()
  {
    return this.http.get(this.url);
  }
}
