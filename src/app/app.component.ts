import { Component, OnInit , HostListener} from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'website';
  currentRoute!: string;
  innerWidth!: number;
  isdisplay = true;
  constructor(private router: Router){    
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
      if(this.currentRoute == '/experience' && this.innerWidth < 900){
        this.isdisplay = false;
      }
  });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
  this.innerWidth = window.innerWidth;
  if(this.currentRoute == '/experience' && this.innerWidth < 900){
    this.isdisplay = false;
    console.log(this.isdisplay);
  }else if(this.innerWidth >=900 )
  {this.isdisplay = true}
}
  ngOnInit(){
    this.innerWidth = window.innerWidth;
  }

    
  
}
