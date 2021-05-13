import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesComponent } from './components/actividades/actividades.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { SomosComponent } from './components/somos/somos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/modals/login/login.component';

import { TablaActividadesComponent } from './components/tablas/tabla-actividades/tabla-actividades.component';
import { TablaConveniosComponent } from './components/tablas/tabla-convenios/tabla-convenios.component';
import { TablaPrestadoresdesaludComponent } from './components/tablas/tabla-prestadoresdesalud/tabla-prestadoresdesalud.component';
import { TablaNoticiasComponent } from './components/tablas/tabla-noticias/tabla-noticias.component';
import { TablaCategoriasComponent } from './components/tablas/tabla-categorias/tabla-categorias.component';
import { TablaMedioDePagoComponent } from './components/tablas/tabla-pagos/tabla-pagos.component';
import { TablaPersonasComponent } from './components/tablas/tabla-personas/tabla-personas.component';
import { TablaPreciosComponent } from './components/tablas/tabla-precios/tabla-precios.component';
import { TablaContratosComponent } from './components/tablas/tabla-contratos/tabla-contratos.component';

;


const routes: Routes = [
  {path : "",component: InicioComponent},
  {path : "actividades",component: ActividadesComponent },
  {path : "contactos",component: ContactosComponent},
  {path : "somos",component: SomosComponent},
  {path : "tabla",component: TablaActividadesComponent},
  {path : "login",component: LoginComponent},
  {path : "Tabla_Convenio",component: TablaConveniosComponent},
  {path : "Tabla_Prestador",component: TablaPrestadoresdesaludComponent},
  {path : "Tabla_Noticias",component: TablaNoticiasComponent},
  {path : "Tabla_Actividad",component: TablaActividadesComponent},
  {path : "Tabla_Contrato",component: TablaContratosComponent},
  {path : "Tabla_MediosDePagos",component: TablaMedioDePagoComponent},
  {path : "Tabla_Persona",component: TablaPersonasComponent},
  {path : "Tabla_Precio",component: TablaPreciosComponent},
  {path : "Tabla_Categorias",component: TablaCategoriasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
