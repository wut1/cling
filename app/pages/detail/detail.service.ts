import { Injectable } from '@angular/core';
import { Http} from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { Config } from "../../shared/config";

@Injectable()
export class DetailService {
    constructor(private http:Http){}
    getArticleDetail(obj):Observable<any>{
        return this.http.post(Config.getArticleDetail,obj).map(res=>res.json())
    }
}