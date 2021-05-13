import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona, prestador } from 'src/app/other/interfaces';

@Component({
  selector: 'app-vermas-persona',
  templateUrl: './vermas-persona.component.html',
  styleUrls: ['./vermas-persona.component.css']
})
export class VermasPersonaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _persona:PersonaService ) { }



  id : number;
  @Input() per:Persona;


  openLg(content) {
    this.modalService.open(content);
  }

ngOnInit(): void {
   
  }

 
}
