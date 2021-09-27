import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hide= true;
  currentRoute = '/';
  constructor(private router: Router) { 
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
  });
  }

  ngOnInit(): void {
  }
  showSidebar(){
    this.hide= !this.hide;
  }
  closeSidebar(){
    this.hide = true;
  }

}
