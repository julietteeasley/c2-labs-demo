import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import {SERVICES} from '../mock-service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = SERVICES;

  constructor() { }

  ngOnInit(): void {
  }

}
