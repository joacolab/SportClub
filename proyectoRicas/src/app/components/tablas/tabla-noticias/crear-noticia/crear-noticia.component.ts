import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/other/interfaces';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TablaNoticiasComponent } from '../tabla-noticias.component';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class CrearNoticiaComponent implements OnInit {
  constructor(private modalService: NgbModal, private _serv:NoticiasService,private _recarg:TablaNoticiasComponent) { }



  model: NgbDateStruct;

  closeResult: string;
  imagen:File;
  imagen64:string | ArrayBuffer=null;
  
  not:Noticia ={
    id:0,
    titulo: "",
    descripcion: "",
    imagen: "",
    fechaCaducidad: null
}
public mr: NgbModalRef;
titulov = new FormControl(' ', [Validators.required]);
descripcionv = new FormControl(' ', [Validators.required]);

  ngOnInit(){
  }

  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }


  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    me.imagen64=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  crearNoticia(){
    if(this.titulov.valid && this.descripcionv.valid )
    {
    
    this.not.fechaCaducidad = new Date(this.model.year,this.model.month,this.model.day);
    var fileUplodVM: string = this.imagen64.toString();
      
      this.not.imagen = fileUplodVM;
   
      this._serv.CrearNoticia(this.not).subscribe(response =>{
        this._recarg.ngOnInit();
        this.mr.close();
    })
  }
  

  }
 



}

