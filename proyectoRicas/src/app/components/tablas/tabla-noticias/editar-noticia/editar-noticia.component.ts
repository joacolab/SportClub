import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticia } from 'src/app/other/interfaces';
import { TablaNoticiasComponent } from '../tabla-noticias.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {

  constructor(private modalService: NgbModal, private _serv:NoticiasService,private _recarg:TablaNoticiasComponent) { }

  model: NgbDateStruct;
  closeResult: string;
  imagen:File;
  imagen64:string | ArrayBuffer=null;

  @Input() not:Noticia;

  ngOnInit(): void {
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
 public mr: NgbModalRef;
titulov = new FormControl(' ', [Validators.required]);
descripcionv = new FormControl(' ', [Validators.required]);

archivov = new FormControl(' ', [Validators.required]);

open(content) {
  this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
 }

  editar(){
    if(this.titulov.valid && this.descripcionv.valid  && this.archivov.valid){
    if(this.model != null){
      this.not.fechaCaducidad = new Date(this.model.year,this.model.month,this.model.day);
    }
    if(this.imagen64 != null){    
      var fileUplodVM: string = this.imagen64.toString(); 
      this.not.imagen = fileUplodVM;
    }
    this._serv.ActualizarNoticia(this.not.id,this.not).subscribe(response =>{
      this._recarg.ngOnInit();
      this.mr.close();
   })
  }
  }
}
