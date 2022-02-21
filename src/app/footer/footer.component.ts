import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer;

  constructor(service: FooterService) {
    this.footer = service.getFooter();
  }

  ngOnInit(): void {
  }

}
