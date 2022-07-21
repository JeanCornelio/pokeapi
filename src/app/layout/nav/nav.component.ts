import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private render: Renderer2) { 
    this.render.listen('window', 'click', (e:Event)=>{
      let hamburger = <HTMLBodyElement>document.querySelector(".hamburger");
      let  hamburgerInner = <HTMLBodyElement>document.querySelector(".hamburger-inner");
      let  hamburgerBox = <HTMLBodyElement>document.querySelector(".hamburger-box");
     
    if(e.target === hamburger || e.target === hamburgerInner || e.target === hamburgerBox){
        hamburger.classList.add("is-active")
      }else{
        hamburger.classList.remove("is-active")
      } 
    })
  }

  ngOnInit(): void {
 
  }


}
