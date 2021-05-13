import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { LogReg } from 'src/app/other/interfaces';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  closeResult = '';
  logi:LogReg ={
    email : "",
    password : ""
  };
  
  constructor(
    private modalService: NgbModal,
   private _user:UserService) {}

  ngOnInit(): void {}
  
  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }
 


  isloged: boolean = false

  public mr: NgbModalRef;
  
  emailv = new FormControl(' ', [Validators.required,Validators.email]);
  passv = new FormControl(' ', [Validators.required]);
  login(){
    if(this.passv.valid && this.emailv.valid){
    this._user.login(this.logi).subscribe(response =>{
      localStorage.setItem('token',response.token)
      localStorage.setItem('roles',response.roles)
      this.mr.close();   
    })
  }
  } 


}
