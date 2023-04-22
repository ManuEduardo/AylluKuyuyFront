import React from "react";
import { ModalWrapperProps } from "../models";
import imgDelete from "../assets/delete.png";

export const ModalWrapper = ({
  children,
  onClose,
  title,
  className,
  visible,
  ...props
}: ModalWrapperProps): JSX.Element => {
  if (!visible) return <></>;
  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-40 bg-black bg-opacity-30 backdrop-blur">
      <div
        className={`shadow-3xl mx-auto my-auto p-4 w-screen max-w-sm max-h-max absolute inset-0 bg-sky-100 rounded-3xl border ${
          className || ""
        }`}
        {...props}
      >
        <div className="flex mb-2">
          {title && <h4 className="text-lg font-bold">{title}</h4>}
          <button className="ml-auto" onClick={onClose}>
            <img src={imgDelete} alt="salir" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
