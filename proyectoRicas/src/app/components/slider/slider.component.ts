import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  peliculas:any[]=[
    {name:'Titulo 1',
    img:'assets/car.jpg',
    desc:'Equipos de ciclismos con basta historia, competencias tanto nacionales como internacionales, con clases desde los mas pequeños y principiantes hasta profesionales'},
    {
      name:'titulo 2',
      img:'assets/car1.jpg',
      desc:'Escuela deportiva de rugby con horarios completo llevados a cabo por excelentes profesionales, ex jugadores'
    },
    {
      name:'titulo 3',
      img:'assets/car2.jpg',
      desc:'Clases de basquetbol totalmente gratuitas de lunes a viernes'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit() {
  }

}