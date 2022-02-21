import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  header;

  constructor(service: HeaderService) {
    this.header = service.getHeader();
  }

  ngOnInit(): void {
  }

}
