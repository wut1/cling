import { Component} from '@angular/core';

@Component({
    selector: 'Pages',
    styleUrls:['pages/pages.css'],
    templateUrl:'pages/pages.html'
})
export class PagesComponent {
    public glyphs = new Array<{ icon: string, code: string }>();
    ngOnInit(){

        this.glyphs=[{
            icon:String.fromCharCode(0xe900),
            code:0xe900.toString(16)
        },{
            icon:String.fromCharCode(0xea0a),
            code:0xea0a.toString(16) 
        },{
            icon:String.fromCharCode(0xe971),
            code:0xee971.toString(16) 
        }]
    }
}