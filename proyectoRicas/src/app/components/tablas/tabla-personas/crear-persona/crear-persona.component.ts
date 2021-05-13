import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpClient } from '@angular/common/http';
import { Persona, prestador } from 'src/app/other/interfaces';
import { PrestadoresSaludService } from 'src/app/services/prestadores-salud.service';
import { TablaPersonasComponent } from '../tabla-personas.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})

export class CrearPersonaComponent implements OnInit {

  constructor(private modalService: NgbModal,private _persona:PersonaService,private _pres:PrestadoresSaludService,private _recar:TablaPersonasComponent) { }

  id : number;
 
    closeResult: string
    model: NgbDateStruct;
    model1: NgbDateStruct;
    ListaP : prestador[];
    p:string;
    per:Persona={
      id: 0,
      primerNombre: "",
      segundoNombre: "",
      primerApellido: "",
      segundoApellido: "",
      fechaNacimiento: null,
      documento: "",
      tipoDocumento: "",
      telefono: "",
      direccion: "",
      fechaVenceCarneSalud: null,
      prestadorDeSalud:{
        id:0,
        activo:false,
        nombre: ""
      }
    }
    
    
  ngOnInit(): void {
    this.listarPrestadores();
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


  listarPrestadores(){
    this._pres.ListaPrestador().subscribe(request=>{
      this.ListaP=request;
     
    })
  }

  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  PostPersona(){
    if(this.primernombrev.valid && this.segundonombrev.valid && this.primerapellidov.valid && this.segundoapellidov.valid 
       && this.telefonov.valid && this.documentov.valid && this.tipodocumentov.valid && this.prestadorv.valid && this.direccionv.valid){
    this.per.fechaNacimiento = new Date(this.model.year,this.model.month,this.model.day);
    this.per.fechaVenceCarneSalud = new Date(this.model1.year,this.model1.month,this.model1.day);
    this.per.prestadorDeSalud.id = Number(this.p);
    this._persona.PostPersona(this.per).subscribe(Response =>{
      this._recar.ngOnInit();
      this.mr.close();
    })
  }
  }
}
