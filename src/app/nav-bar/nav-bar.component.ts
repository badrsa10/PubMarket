import { Component, OnInit, HostListener } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public scroll: boolean;
  constructor() {
    this.scroll = false;
   }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(window.pageYOffset <= 150){
      this.scroll = false;
    }else{
      this.scroll = true;
    }
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    //console.log("Scroll Event", window.pageYOffset );
  }

}
