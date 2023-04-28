import React from "react";

export type ProtectedRouteProps = {
  redirectTo: string;
};
export type LayoutNavFooterProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type ModalWrapperProps = {
  visible: boolean;
  title?: string;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type NavWrapperProps = {
  children: JSX.Element;
};

export type LoadingProps = {
  loading: boolean;
};

export type ErrorMessageProps = ModalWrapperProps;

export type ButtonDefaultProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
};

export interface Family {
  codigo_familiar: number;
  contrasena: number;
  nombre: string;
}

export interface Croquis {
  idcroquis: number;
  idfamilia: number;
  piso: number;
  mapa: File;
}

export interface FamilyMember {
  idintegrante: number;
  idFamilia: number;
  nombre: string;
  apellido: string;
  dni: number;
  telefono: number;
  lider: boolean;
  discapacitado: boolean;
  mascota: boolean;
  roles: string;
}

export interface Home {
  cantidad: number;
  codigo_familiar: number;
  lider: string;
  nombre_familia: string;
}

export const EmptyHome: Home = {
  cantidad: 0,
  codigo_familiar: 0,
  lider: "",
  nombre_familia: "",
};

export interface ZoneModel {
  idruta: number;
  idfamilia: number;
  nombre: string;
  detalle: string;
  tipo: string;
}

export interface Item {
  id_item: number;
  nombre: string;
  fecha: string;
  caduce: boolean;
  caduco: boolean;
  disponible: boolean;
}

export interface Paso {
  paso: number;
  idPaso: number;
  detalle: string;
}


export interface ImageType {
  file: File | null;
  preview: string | null;
}



export const EmptyPaso: Paso = {
  paso: 0,
  idPaso: 0,
  detalle: "",
};

export const EmptyItem: Item = {
  id_item: 0,
  nombre: "",
  fecha: "",
  caduce: false,
  caduco: false,
  disponible: false
};


export const EmptyFamily: Family = {
  codigo_familiar: parseInt(localStorage.getItem("codigo_familiar") ?? "0"),
  contrasena: 0,
  nombre: "",
};

export const EmptyZone: ZoneModel = {
  idruta: 0,
  idfamilia: 0,
  nombre: "",
  detalle: "",
  tipo: "",
};

export const EmptyCroquis: Croquis = {
  idcroquis: 0,
  idfamilia: 0,
  piso: 0,
  mapa: new File([], "")
}

export const ROUTES = {
  login: "/login",
  home: "/home",
  welcome: "/welcome",
  register: "/register",
  familyRoles: "/family",
  myHome: "/my-home",
  zone: "/zone",
  bag: "/bag",
  plan: "/plan",
  resources: "/resources",
};
