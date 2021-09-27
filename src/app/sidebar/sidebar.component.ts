
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentRoute = '/';
  constructor(private router: Router) { 
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
  });
  }

  ngOnInit(): void {
  }

}
