import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  urlProviders = 'http://127.0.0.1:8080/providers';

  //private tab:string[]=["Samsung","Nokia","HP"];
  //private users:any;

  //private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  listProviders() {
    return this.http.get(this.urlProviders + '/list');
  }
  /*
    public getProviders()
    {
      return this.tab;
    }

    public getUser()
    {
      return this.http.get(this.url);
    }*/
}
