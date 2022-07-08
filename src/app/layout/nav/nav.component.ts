import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }

  
  
  changeHambur(){
    let hamburger = <HTMLBodyElement>document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active")
  
  }
}
