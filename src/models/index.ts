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
  nombre: string;
  apellido: string;
  dni: number;
  telefono: number;
  rol: string;
  discapacidad: boolean;
}

export interface Home {
  cantidad: number;
  codigo: number;
  lider: string;
  familia: string;
}

export interface ZoneModel {
  id_zona: string;
  nombre: string;
  detalle: string;
  tipo: string;
}

export interface Item {
  id_item: string;
  nombre: string;
  fecha: string;
  caducable: boolean;
  caduco: boolean
  existente: boolean;
}

export interface Paso{
  paso: number
  idPaso: number;
  detalle: string
}

export const FakePaso: Paso = {
  paso: 1,
  idPaso: 424321,
  detalle: "habia un gato muy grande y se murió por pelear con perros xd"
}

export const FakeItem: Item = {
  id_item: "fasdfa",
  nombre: "Agua",
  fecha: "20/03/23",
  caducable: true,
  caduco:true,
  existente: true,
};
export const FakeHome: Home = {
  cantidad: 5,
  codigo: 42345,
  lider: "Manuel",
  familia: "Torres Muñoz",
};

export const FakeFamilyMember: FamilyMember = {
  nombre: "manuel",
  apellido: "sanchez",
  dni: 72032363,
  telefono: 936933520,
  rol: "lider",
  discapacidad: false,
};

export const EmptyFamily: Family = {
  cod_familia: 1,
  contrasena: 0,
  nombre: "Torres Muñoz",
};

export const FakeZones: ZoneModel = {
  id_zona: "kflsdjfal",
  nombre: "Parque Olivos",
  detalle: "Al frente del hospital",
  tipo: "Principal",
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
