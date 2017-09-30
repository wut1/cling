import { DetailService } from './detail.service';
import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap  } from '@angular/router';

@Component({
    selector: 'Detail',
    templateUrl: 'pages/detail/detail.html',
    styleUrls: ['pages/detail/detail.css'],
    providers:[DetailService]
})
export class DetailComponent {
    public htmlString:string;
    constructor(private router: Router,private route:ActivatedRoute,private detailService:DetailService) { }
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.detailService.getArticleDetail({id:id}).subscribe((response)=>{
                  if(response.resultCode==1){
                    //this.htmlString=response.resultObj.content;
                    this.htmlString=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" /><meta charset="utf-8" />
                    <style>
                    .show-content {
                        color: #2f2f2f;
                        word-break: break-word!important;
                        word-break: break-all;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.7
                    }
                     .show-content p {
                        margin: 0 0 25px
                    }
                     .show-content blockquote h1:last-child, .show-content blockquote h2:last-child, .show-content blockquote h3:last-child, .show-content blockquote h4:last-child, .show-content blockquote h5:last-child, .show-content blockquote h6:last-child, .show-content blockquote li:last-child, .show-content blockquote ol:last-child, .show-content blockquote p:last-child, .show-content blockquote ul:last-child {
                        margin-bottom: 0
                    }
                     .show-content .video-package .video-description p {
                        margin: 0
                    }
                     .show-content li p {
                        overflow: visible
                    }
                     .show-content a {
                        color: #3194d0
                    }
                     .show-content a:hover {
                        color: #3194d0;
                        text-decoration: underline
                    }
                     .show-content a.active, .show-content a:active, .show-content a:focus {
                        color: #3194d0
                    }
                     .show-content a.disabled, .show-content a.disabled.active, .show-content a.disabled:active, .show-content a.disabled:focus, .show-content a.disabled:hover, .show-content a[disabled], .show-content a[disabled].active, .show-content a[disabled]:active, .show-content a[disabled]:focus, .show-content a[disabled]:hover {
                        cursor: not-allowed;
                        color: #f5f5f5
                    }
                     .show-content ol, .show-content p, .show-content ul {
                        word-break: break-word!important;
                        word-break: break-all
                    }
                     .show-content hr {
                        margin: 0 0 20px;
                        border-top: 1px solid #ddd
                    }
                     .show-content h1, .show-content h2, .show-content h3, .show-content h4, .show-content h5, .show-content h6 {
                        margin: 0 0 15px;
                        font-weight: 700;
                        color: #2f2f2f;
                        line-height: 1.7;
                        text-rendering: optimizelegibility
                    }
                     .show-content h1 {
                        font-size: 26px
                    }
                     .show-content h2 {
                        font-size: 24px
                    }
                     .show-content h3 {
                        font-size: 22px
                    }
                     .show-content h4 {
                        font-size: 20px
                    }
                     .show-content h5 {
                        font-size: 18px
                    }
                     .show-content h6 {
                        font-size: 16px
                    }
                     .show-content img {
                        max-width: 100%
                    }
                     .show-content blockquote {
                        padding: 20px;
                        margin-bottom: 25px;
                        background-color: #f7f7f7;
                        border-left: 6px solid #b4b4b4;
                        word-break: break-word!important;
                        word-break: break-all;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 30px
                    }
                     .show-content blockquote p {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.7
                    }
                     .show-content blockquote .image-package {
                        width: auto;
                        margin-left: 0
                    }
                     .show-content ol, .show-content ul {
                        padding: 0;
                        margin-left: 22px;
                        margin-bottom: 20px
                    }
                     .show-content ol li, .show-content ul li {
                        margin-bottom: 10px;
                        line-height: 30px
                    }
                     .show-content ol li ol, .show-content ol li ul, .show-content ul li ol, .show-content ul li ul {
                        margin-top: 15px
                    }
                     .show-content ol .image-package, .show-content ul .image-package {
                        width: auto!important;
                        margin-left: 0!important
                    }
                     .show-content pre {
                        margin-bottom: 20px;
                        padding: 15px;
                        font-size: 13px;
                        word-wrap: normal;
                        word-break: break-word!important;
                        word-break: break-all;
                        white-space: pre;
                        overflow: auto;
                        border-radius: 0
                    }
                     .show-content pre code {
                        padding: 0;
                        background-color: transparent;
                        white-space: pre
                    }
                     .show-content code {
                        padding: 2px 4px;
                        background-color: #f6f6f6;
                        border: none;
                        color: #657b83;
                        font-size: 12px;
                        white-space: pre-wrap
                    }
                     .show-content table {
                        width: 100%;
                        margin-bottom: 20px;
                        border: 1px solid #ddd;
                        border-collapse: collapse;
                        border-left: none;
                        word-break: normal
                    }
                     .show-content table tr:nth-of-type(2n) {
                        background-color: hsla(0,0%,71%,.1)
                    }
                     .show-content table thead th {
                        vertical-align: middle;
                        text-align: inherit
                    }
                     .show-content table td, .show-content table th {
                        padding: 8px;
                        border: 1px solid #ddd;
                        line-height: 20px;
                        vertical-align: middle
                    }
                     .show-content table th {
                        font-weight: 700
                    }
                     .show-content table .image-package {
                        width: auto;
                        margin-left: 0
                    }
                     .show-content .image-package {
                        padding-bottom: 25px;
                        max-width: 700px;
                        width: 100%;
                        text-align: center
                    }
                     .show-content .image-package img {
                        max-width: 100%;
                        height: auto;
                        vertical-align: middle;
                        border: 0;
                        cursor: -webkit-zoom-in;
                        transition: all .25s ease-in-out
                    }
                     .show-content .image-package .image-caption {
                        min-width: 20%;
                        max-width: 80%;
                        min-height: 22px;
                        display: inline-block;
                        padding: 10px;
                        margin: 0 auto;
                        border-bottom: 1px solid #d9d9d9;
                        font-size: 14px;
                        color: rgb(230, 230, 230);;
                        line-height: 1.7
                    }
                     .show-content .image-package .image-caption:empty {
                        display: none
                    }
                     .show-content .video-package {
                        position: relative;
                        margin: -20px auto 20px;
                        text-align: center
                    }
                     .show-content .video-package .video-placeholder-area {
                        position: relative;
                        display: inline-block;
                        height: 110px;
                        padding: 10px;
                        padding-left: 120px;
                        box-sizing: border-box;
                        border: 1px solid #d9d9d9;
                        background-color: hsla(0,0%,71%,.1);
                        text-align: left;
                        cursor: pointer
                    }
                     .show-content .video-package .video-placeholder-area:after {
                        content: " ";
                        position: absolute;
                        top: -1px;
                        left: -1px;
                        display: block;
                        width: 110px;
                        height: 110px;
                        background-color: rgba(0,0,0,.3);
                        background-image: url('//cdn2.jianshu.io/assets/common/play-btn-c4bc06b9dfe063495b6b8277b14bc5c3.png');
                        background-position: 30px;
                        background-size: 50px;
                        background-repeat: no-repeat;
                        transition: all .1s linear
                    }
                     .show-content .video-package .video-placeholder-area:hover:after {
                        background-color: transparent
                    }
                     .show-content .video-package .video-placeholder-area .video-cover {
                        position: absolute;
                        top: -1px;
                        left: -1px;
                        display: block;
                        width: 110px;
                        height: 110px;
                        opacity: .8;
                        transition: opacity .1s linear
                    }
                     .show-content .video-package .video-description {
                        min-width: 20%;
                        min-height: 22px;
                        display: none;
                        padding: 10px;
                        margin: 0 auto;
                        border-bottom: 1px solid #d9d9d9;
                        font-size: 13px;
                        color: #999;
                        line-height: 1.7
                    }
                     .show-content .video-package .video-description:empty {
                        display: none
                    }
                     .show-content .video-package .video-close-button, .show-content .video-package .video-provider-button {
                        text-align: left;
                        font-size: 14px;
                        padding: 0;
                        line-height: 14px;
                        cursor: pointer;
                        transition: opacity .1s linear
                    }
                     .show-content .video-package .video-close-button i, .show-content .video-package .video-provider-button i {
                        position: relative;
                        top: 1px
                    }
                     .show-content .video-package .video-provider-button {
                        float: right
                    }
                    </style>   
                    </head><body class="show-content">${response.resultObj.content}</body></html>`
                  }
               });
    }
}