import { ErrorMessageProps } from "../models";
import ButtonDefault from "./ButtonDefault";
import { ModalWrapper } from "./ModalWrapper";

function ErrorMessage({ children, title, onClose, ...props}: ErrorMessageProps):JSX.Element {
  return (
    <ModalWrapper title={title || "ERROR"} onClose={onClose} {...props}>
      {children}
      <ButtonDefault className="bg-red-500 hover:bg-red-600 block mx-auto mt-4 px-8" onClick={onClose}>
        OK
      </ButtonDefault>
    </ModalWrapper>
  )
}

export default ErrorMessage;