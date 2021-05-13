import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent implements OnInit {

  peliculas:any[]=[
    {
    img:'assets/us1.jpg',
    },
    {
      img:'assets/us2.jpg',
    },
    {
      img:'assets/us3.jpg',
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 1000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit() {
  }

}