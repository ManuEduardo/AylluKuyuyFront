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
    children: JSX.Element
}

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

export const FakeFamilyMember: FamilyMember = {
  nombre: "manuel",
  apellido: "sanchez",
  dni: 72032363,
  telefono: 936933520,
  rol: "lider",
  discapacidad: false

}

export const EmptyFamily:Family = {
  cod_familia : 1,
  contrasena : 0,
  nombre : "Torres Muñoz"
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
