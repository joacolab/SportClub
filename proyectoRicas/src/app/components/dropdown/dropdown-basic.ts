import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html'
})
export class NgbdDropdownBasic {
  
  roles:String[];

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
  ROLSE(){
    if(localStorage.getItem("roles") != null){
      if(localStorage.getItem("roles").includes('SECRETARIA'))
        return true
      else 
        return false
      }
    else
      return null
      
}
  
  isloged(){
    if(localStorage.getItem("token") != "")
      return true
    else
      return false
  }

}
