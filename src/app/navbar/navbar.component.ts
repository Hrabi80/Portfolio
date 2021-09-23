import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hide= true;
  constructor() { }

  ngOnInit(): void {
  }
  showSidebar(){
    this.hide= !this.hide;
  }
  closeSidebar(){
    this.hide = true;
  }

}
