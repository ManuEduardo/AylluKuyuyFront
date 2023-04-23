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
  cod_familia: number;
  contrasena: number;
  nombre: string;
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
  id_item: string;
  nombre: string;
  fecha: string;
  caducable: boolean;
  caduco: boolean;
  existente: boolean;
}

export interface Paso {
  paso: number;
  idPaso: number;
  detalle: string;
}

export const EmptyPaso: Paso = {
  paso: 0,
  idPaso: 0,
  detalle: "",
};

export const FakeItem: Item = {
  id_item: "fasdfa",
  nombre: "Agua",
  fecha: "20/03/23",
  caducable: true,
  caduco: true,
  existente: true,
};

export const EmptyFamily: Family = {
  cod_familia: 0,
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
