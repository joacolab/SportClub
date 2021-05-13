import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Rol } from 'src/app/other/interfaces';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private _user:UserService) { }
    closeResult="";
    roles:string[]
    rol:Rol={ 
    username:"",
    role:""
    }
    public mr: NgbModalRef;
  ngOnInit(): void {
    
  }
  correov = new FormControl(' ', [Validators.email]);
  rolv = new FormControl(' ', [Validators.required]);
  
  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    else {
      return `with: ${reason}`;
    }
  }
 
  AsignarRol(){
    if(this.rolv.valid && this.correov.valid){
      this._user.asignarRol(this.rol).subscribe(response=>{
          this.mr.close();
    })
  }
  }
  ListarRoles(){
    
    this._user.listarRoles().subscribe(response=>{
      this.roles = response;
    })
  
  }
  ROLAD(){
    if(localStorage.getItem("roles") != null){
      if(localStorage.getItem("roles").includes('ADMIN'))
        return true
      else
        return false
    }
    else
      return null
  }
}
