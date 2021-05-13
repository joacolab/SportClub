export interface LogReg{
    email : string,
    password : string,
    roles ?: string[]
}
export interface Noticia{
    id?: number,
    titulo: string,
    descripcion: string,
    imagen: string,
    fechaCaducidad: Date
}
export interface Actividad{
   
    id?: number,
    nombre: string,
    activo: boolean,
}
export interface prestador{
    id?: number,
    nombre: string,
    activo: boolean
}
export interface precio{
    id?:number,
    valor: number,
    fechaVigencia:Date,
    categoria: {
        id: number,
        nombre: string,
        activo: boolean,
        precios: [
          null
        ]
      }
}

export interface categoria{
    id?:number,
    nombre:string,
    activo:boolean,
    precios:precio[]
}
export interface Contrato{
    id_Contrato?: number,
    usuarioGenero: string,
    fechaComienzo: Date,
    id_Persona: number,
    id_Convenio: number,
    id_Categoria: number,
    id_MedioDePago: number,
    activo: boolean
}

export interface ContratoCompleto{
    id: number,
    fechaHoraGenerado: Date,
    usuarioGenero: string,
    fechaComienzo: Date,
    socio:Persona,
    convenio:Convenio,
    categoria: categoria,
    medioDePago:MedioDePago,
    activo: boolean
}

export interface Convenio{
    id?: number,
    nombre: string,
    porcentajeDescuento: number,
    activo: boolean
}

export interface MedioDePago{
    id?: number,
    nombre: string,
    activo: boolean
}



export interface Persona{
    id?: number,
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    fechaNacimiento: Date,
    documento: string,
    tipoDocumento: string,
    telefono: string,
    direccion: string,
    fechaVenceCarneSalud: Date,
    prestadorDeSalud: prestador
}

export interface Rol{
    username:string,
    role:string
}