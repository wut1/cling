import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../../shared/config";

@Injectable()
export class HomeService {
    constructor(private http: Http){}
    getListArticle(obj){
        return this.http.post(Config.getArticles,obj)
          .map(res => res.json())
    }
}