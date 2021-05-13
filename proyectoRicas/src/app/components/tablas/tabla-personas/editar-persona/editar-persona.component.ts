import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Persona, prestador } from 'src/app/other/interfaces';
import { PersonaService } from 'src/app/services/persona.service';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { TablaPersonasComponent } from '../tabla-personas.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _persona:PersonaService,private _pres:PrestadoresSaludService,private _recar:TablaPersonasComponent) { }
   
  closeResult: string
  @Input() per:Persona;
  model: NgbDateStruct;
  model1: NgbDateStruct;
  ListaP:prestador[]
  p:string;
  ngOnInit(): void {
    this.listarPrestadores();
    this.p = this.per.prestadorDeSalud.id.toString();
  }
  public mr: NgbModalRef;
  
  primernombrev = new FormControl(' ', [Validators.required,Validators.minLength(3),Validators.maxLength(128)]);
  segundonombrev = new FormControl(' ', [Validators.maxLength(128)]);
  primerapellidov = new FormControl(' ', [Validators.required,Validators.minLength(3),Validators.maxLength(128)]);
  segundoapellidov = new FormControl(' ', [Validators.maxLength(128)]);
  telefonov = new FormControl(' ', [Validators.maxLength(128)]);
  documentov = new FormControl(' ', [Validators.maxLength(128)]);
  tipodocumentov = new FormControl(' ', [Validators.maxLength(128)]);
  direccionv = new FormControl(' ', [Validators.maxLength(128)]);
  prestadorv = new FormControl(' ', [Validators.required]);
 
  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }


  
  listarPrestadores(){
    this._pres.ListaPrestador().subscribe(request=>{
      this.ListaP=request;
     
    })
  }

  PutPersona(){ 
    if(this.primernombrev.valid && this.segundonombrev.valid && this.primerapellidov.valid && this.segundoapellidov.valid 
      && this.telefonov.valid && this.documentov.valid && this.tipodocumentov.valid && this.prestadorv.valid && this.direccionv.valid){
    if(this.model != null){
      this.per.fechaNacimiento = new Date(this.model.year,this.model.month,this.model.day);
    }
    if(this.model1 != null){
      this.per.fechaVenceCarneSalud = new Date(this.model1.year,this.model1.month,this.model1.day);
    }
    this.per.prestadorDeSalud.id = Number(this.p);
    this._persona.PutPersona(this.per).subscribe(Response =>{
      this._recar.ngOnInit();
      this.mr.close();
    })
  }
  }
}
