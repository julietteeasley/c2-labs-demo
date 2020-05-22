import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer_text = "2020 by C2 Labs, Inc."

  constructor() { }

  ngOnInit(): void {
  }

}
