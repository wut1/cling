import { HomeService } from './home.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBar } from "ui/search-bar";
import { ObservableArray } from "data/observable-array";
import { ScrollEventData,ScrollView } from "ui/scroll-view";
import {isAndroid,screen} from "platform";


interface Meta {
    comments:number;
    favs:number;
    look:number;
}
interface User {
    avatar:string;
    id:string;
    name:string;
}
class article {
    id:string;
    content:string;
    meta:Meta;
    user:User;
    time:Date;
    title:string
}


@Component({
    selector: 'Home',
    templateUrl: 'pages/home/home.html',
    styleUrls: ['pages/home/home.css'],
    providers:[HomeService]
})
export class HomeComponent {
    private arrayItems: Array<article> = [];
    constructor(private homeService:HomeService,private router: Router) { 
        
    }
    ngOnInit():void{
        this.getList();
    }
    public toSearch(){
        this.router.navigate(['/search']);
    }
    public sBLoaded(args){
        var searchBar:SearchBar = <SearchBar>args.object;     
    }
    public getList(page:number=0):void{
        this.homeService.getListArticle({page:page}).subscribe((response)=>{
          if(response.resultCode==1){
            if(page ==0){
              this.arrayItems = response.resultObj;
            }else {
              this.arrayItems = this.arrayItems.concat(response.resultObj);
            }        
          }
       })
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();    
   
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object; 
    }
    public onScrollLoaded(args) {
        
    }
    public onScroll(args: ScrollEventData) {
        console.log("scrollY: " + args.scrollY);
    }

    public toDetail(id:string):void {
        this.router.navigate(['/pages/detail', id]);
       }
}