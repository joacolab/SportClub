
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {Router} from '@angular/router'
import { ToastService } from './services/error/toast-service';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,public toastService: ToastService) {}

  openSnackBar(message: string) {
    this.toastService.show(message, { classname: 'bg-danger text-light', delay: 2500 });
  
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {

          errorMessage = `${error.error.message}`;
        } else {

          errorMessage =  `${error.error}`;
        }


        if( errorMessage == '[object ProgressEvent]'){
          errorMessage = "Error interno del servidor"
        }
        if( errorMessage == 'null'){
          this.router.navigate(['/']);
          errorMessage = "Acceso no autorizado"
        }

        this.openSnackBar(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}