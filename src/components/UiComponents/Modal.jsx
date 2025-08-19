import React, { useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({
  id,
  isOpen = false,
  onClose = () => {},
  widthClass = "w-11/12 max-w-xl",
  className = "",
  children,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else {
      if (dialogRef.current.open) dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (dialogRef.current && e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      id={id}
      ref={dialogRef}
      className={`modal ${className}`}
      onClose={handleClose}
      onCancel={handleClose}
      onClick={handleClickOutside}
    >
      <div className={`modal-box relative ${widthClass}`}>
        <button
          type="button"
          aria-label="Close modal"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {children}
      </div>
    </dialog>
  );
}

export function ModalHeader({ children, className = "" }) {
  return <h3 className={`font-bold text-lg mb-4 ${className}`}>{children}</h3>;
}

export function ModalBody({ children, className = "" }) {
  return <div className={`py-4 ${className}`}>{children}</div>;
}

export function ModalFooter({ children, className = "" }) {
  return <div className={`modal-action ${className}`}>{children}</div>;
}
