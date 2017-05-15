import { Component, OnInit } from '@angular/core';
import { AppRoutingModule, routingComponents } from "app/app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private projectName:string;
  constructor() { 
    this.projectName="My Website";
  }

  ngOnInit() {
  }

}
