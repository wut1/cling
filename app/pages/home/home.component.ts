import { HomeService } from './home.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { ObservableArray } from "data/observable-array";
import { ScrollEventData,ScrollView } from "ui/scroll-view";
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
    selector: 'home',
    templateUrl: 'pages/home/home.html',
    styleUrls: ['pages/home/home.css'],
    providers:[HomeService]
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    private arrayItems: Array<article> = [];
    constructor(private homeService:HomeService) { 
        
    }
    ngOnInit():void{
        this.getList();
    }
    getList(page:number=0):void{
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
        searchBar.text = "";
        searchBar.hint = "输入搜索内容";

  
    }
    public onScrollLoaded(args) {
        
        // scroll to specific position of the horizontal scroll list
        // let scrollOffset = 330;
        // (<ScrollView>args.object).scrollToVerticalOffset(scrollOffset, true);
    }
    public onScroll(args: ScrollEventData) {
        console.log("scrollY: " + args.scrollY);
    }
}