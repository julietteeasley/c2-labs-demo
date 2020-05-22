import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer_text = 'Copyright C2 Labs 2020'

  constructor() { }

  ngOnInit(): void {
  }

}
