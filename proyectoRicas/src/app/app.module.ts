import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { SomosComponent } from './components/somos/somos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaActividadesComponent } from './components/tablas/tabla-actividades/tabla-actividades.component';
import { TablaCategoriasComponent } from './components/tablas/tabla-categorias/tabla-categorias.component';
import { TablaConveniosComponent } from './components/tablas/tabla-convenios/tabla-convenios.component';
import { TablaPersonasComponent } from './components/tablas/tabla-personas/tabla-personas.component';
import { TablaPreciosComponent } from './components/tablas/tabla-precios/tabla-precios.component';
import { TablaPrestadoresdesaludComponent } from './components/tablas/tabla-prestadoresdesalud/tabla-prestadoresdesalud.component';
import { SidebarModule } from 'ng-sidebar';
import { NgbdDropdownBasic } from './components/dropdown/dropdown-basic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ViewNewsComponent } from './components/modals/view-news/view-news.component';
import { LoginComponent } from './components/modals/login/login.component';
import { RegisterComponent } from './components/modals/register/register.component';
import { TablaNoticiasComponent } from './components/tablas/tabla-noticias/tabla-noticias.component';
import { CrearNoticiaComponent } from './components/tablas/tabla-noticias/crear-noticia/crear-noticia.component';
import { EliminarPrestadorComponent } from './components/tablas/tabla-prestadoresdesalud/eliminar-prestador/eliminar-prestador.component';
import { ModalcrearComponent } from './components/tablas/tabla-prestadoresdesalud/modalCrearPrestador/modalcrear.component';
import { ModaleditarComponent } from './components/tablas/tabla-prestadoresdesalud/modalEditarPrestador/modaleditar.component';
import { CrearCategoriaComponent } from './components/tablas/tabla-categorias/crear-categoria/crear-categoria.component';
import { BorrarNoticiaComponent } from './components/tablas/tabla-noticias/borrar-noticia/borrar-noticia.component';
import { EditarNoticiaComponent } from './components/tablas/tabla-noticias/editar-noticia/editar-noticia.component';
import { CrearPersonaComponent } from './components/tablas/tabla-personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './components/tablas/tabla-personas/editar-persona/editar-persona.component';
import { CrearPreciosComponent } from './components/tablas/tabla-precios/crear-precio/crear-precio.component';
import { EditarPreciosComponent } from './components/tablas/tabla-precios/editar-precio/editar-precio.component';
import { CrearActividadComponent } from './components/tablas/tabla-actividades/crear-actividad/crear-actividad.component';
import { EditarActividadComponent } from './components/tablas/tabla-actividades/editar-actividad/editar-actividad.component';
import { CrearConvenioComponent } from './components/tablas/tabla-convenios/crear-convenio/crear-convenio.component';
import { EditarConvenioComponent } from './components/tablas/tabla-convenios/editar-convenio/editar-convenio.component';
import { TablaMedioDePagoComponent } from './components/tablas/tabla-pagos/tabla-pagos.component';
import { CrearMedioDePagoComponent } from './components/tablas/tabla-pagos/crear-pagos/crear-pagos.component';
import { EditarMedioDePagoComponent } from './components/tablas/tabla-pagos/editar-pagos/editar-pagos.component';
import { EliminarActividadesComponent } from './components/tablas/tabla-actividades/eliminar-actividades/eliminar-actividades.component';
import { VermasPersonaComponent } from './components/tablas/tabla-personas/vermas-persona/vermas-persona.component';
import { VermasPrecioComponent } from './components/tablas/tabla-precios/vermas-precio/vermas-precio.component';
import { EditarCategoriaComponent } from './components/tablas/tabla-categorias/editar-categoria/editar-categoria.component';
import { VermasCategoriaComponent } from './components/tablas/tabla-categorias/vermas-categoria/vermas-categoria.component';
import { EliminarConvenioComponent } from './components/tablas/tabla-convenios/eliminar-convenio/eliminar-convenio.component';
import { EliminarCategoriaComponent } from './components/tablas/tabla-categorias/eliminar-categoria/eliminar-categoria.component';
import { EliminarPagosComponent } from './components/tablas/tabla-pagos/eliminar-pagos/eliminar-pagos.component';
import { EliminarPersonaComponent } from './components/tablas/tabla-personas/eliminar-persona/eliminar-persona.component';
import { EliminarPrecioComponent } from './components/tablas/tabla-precios/eliminar-precio/eliminar-precio.component';
import { TablaContratosComponent } from './components/tablas/tabla-contratos/tabla-contratos.component';
import { EditarContratoComponent } from './components/tablas/tabla-contratos/editar-contrato/editar-contrato.component';
import { EliminarContratoComponent } from './components/tablas/tabla-contratos/eliminar-contrato/eliminar-contrato.component';
import { CrearContratoComponent } from './components/tablas/tabla-contratos/crear-contrato/crear-contrato.component';
import { VerMasContratoComponent } from './components/tablas/tabla-contratos/ver-mas-contrato/ver-mas-contrato.component';
import { RolesComponent } from './components/modals/roles/roles.component';
import { VermasNoticiaComponent } from './components/tablas/tabla-noticias/vermas-noticia/vermas-noticia.component';
import { HttpErrorInterceptor } from './error-interceptor.service';
import { ToastsContainer } from './services/error/toasts-container.component';
import { ToastService } from './services/error/toast-service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SomosComponent,
    ActividadesComponent,
    ContactosComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    NavbarComponent,
    NewsComponent,
    NgbdDropdownBasic,
    TablaActividadesComponent,
    TablaCategoriasComponent,
    TablaConveniosComponent,
    TablaPersonasComponent,
    TablaPreciosComponent,
    TablaNoticiasComponent,
    TablaPrestadoresdesaludComponent,
    CrearNoticiaComponent,
    ViewNewsComponent,
    ModalcrearComponent,
    ModaleditarComponent,
    BorrarNoticiaComponent,
    EditarNoticiaComponent,
    EliminarPrestadorComponent,
    CrearCategoriaComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    CrearPreciosComponent,
    EditarPreciosComponent,
    CrearActividadComponent,
    EditarActividadComponent,
    CrearConvenioComponent,
    EditarConvenioComponent,
    TablaMedioDePagoComponent,
    CrearMedioDePagoComponent,
    EditarMedioDePagoComponent,
    CrearPreciosComponent,
    EliminarActividadesComponent,
    VermasPersonaComponent,
    VermasPrecioComponent,
    EditarCategoriaComponent,
    VermasCategoriaComponent,
    EliminarConvenioComponent,
    EliminarCategoriaComponent,
    EliminarPagosComponent,
    EliminarPersonaComponent,
    EliminarPrecioComponent,
    TablaContratosComponent,
    EditarContratoComponent,
    EliminarContratoComponent,
    CrearContratoComponent,
    VerMasContratoComponent,
    RolesComponent,
    VermasNoticiaComponent,
    ToastsContainer
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
  ],

  providers: [NgbCarouselConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },{provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }



