import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public safeUrl : SafeResourceUrl;


  constructor(private _sanitizer: DomSanitizer) {
       this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WovwuOFBUuY');

   }

   ngOnInit(){
     
   }

  
}
