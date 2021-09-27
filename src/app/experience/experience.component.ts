import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  sectionValue='internship';
  internships : Array<any> = [
    {
    'entreprise-name': 'dd',
    'entreprise-img':'assets/img/G',
    'duration':'2 months',
    'type': 'E-commerce',
    'descriptions':[
      {'line':'ddd'},
      {'line':'ddd'},
      {'line':'ddd'},
    ],
    'technology':[{'tech':'angular'}]
    } 
]
  constructor() { }

  ngOnInit(): void {
  }

}
