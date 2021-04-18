import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  //urlProviders = 'http://127.0.0.1:8080/providers';
  //urlProviders = 'http://127.0.0.1:8086/amsrest/providers';
  provider: any;
  urlProviders = environment.rootURL+'/providers';
  //private tab:string[]=["Samsung","Nokia","HP"];
  //private users:any;

  //private url = "https://reqres.in/api/users";

  constructor(private Http: HttpClient) { }

  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }

  createProvider(myform) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }



  updateProvider(myObj) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  deleteProvider(myObj) {
    return this.Http.delete(this.urlProviders + '/' + myObj['id'])
  }
  getProvider(id) {
    return this.Http.get(this.urlProviders + '/' + id)
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
