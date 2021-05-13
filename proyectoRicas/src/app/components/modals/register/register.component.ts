import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { LogReg } from 'src/app/other/interfaces';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data:LogReg ={
    email:"",
    password:""
  }

  public mr: NgbModalRef;
  
  emailv = new FormControl(' ', [Validators.required,Validators.email]);
  passv = new FormControl(' ', [Validators.required,Validators.minLength(4),Validators.maxLength(100)]);

  constructor(
    private modalService: NgbModal,
    private _user:UserService) {}

  ngOnInit(): void {
  }
  closeResult = '';
 
  open(content) {
    this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
   }
 

  register(){
    if(this.passv.valid && this.emailv.valid){
    this._user.register(this.data).subscribe(response =>{
      console.log(response.email)
    })
  }
  }
}
