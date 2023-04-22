import React from "react";

export type ProtectedRouteProps = {
  redirectTo: string;
};
export type LayoutNavFooterProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type ModalWrapperProps = {
  hidden: boolean;
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

export const EmptyFamily:Family = {
  cod_familia : 0,
  contrasena : 0,
  nombre : ""
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
