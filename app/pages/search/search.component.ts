import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import {isAndroid,screen} from "platform";

@Component({
    selector: 'Search',
    templateUrl: 'pages/search/search.html',
    styleUrls: ['pages/search/search.css']
})
export class SearchComponent implements OnInit {
    @ViewChild('searchBar') searchEle:ElementRef;
    searchContent:SearchBar;
    constructor() { }

    ngOnInit() { 
        var main = screen.mainScreen;
        console.dir(main)
    }
    sLoadEvent(args){
        console.log('加载完成')
    }
    public searchPhrase: string;
    
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
    }
}