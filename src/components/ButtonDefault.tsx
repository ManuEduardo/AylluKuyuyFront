import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const ButtonDefault = ({
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={`text-sm font-bold py-3 px-6 bg-yellow-400 rounded-lg hover:bg-yellow-300 text-slate-50 shadow-md shadow-yellow-300 ${
        className && ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
