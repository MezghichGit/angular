import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  article: any;
  urlArticles = environment.rootURL+'/articles';

  constructor( private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
  }
}
