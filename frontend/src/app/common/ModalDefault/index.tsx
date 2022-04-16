import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react';

type ModalDefaultType = {
  children: ReactNode;
  title: string;
  label: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLButtonElement>) => void;
  toggle: string;
};
const ModalDefault: React.FC<ModalDefaultType> = ({
  children,
  title,
  label,
  onSubmit,
  toggle,
  onChange,
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        {label}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={onSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  data-bs-dismiss={toggle}
                  type="submit"
                  className="btn btn-primary"
                  onChange={onChange}
                >
                  {label}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { ModalDefault };
