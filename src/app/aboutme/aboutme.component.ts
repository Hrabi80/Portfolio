import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { 
  }
  h:string='';
  ngOnInit(): void {
    
  }

}
