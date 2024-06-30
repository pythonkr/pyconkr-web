import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.scss";
import { isEscKeyPressed } from "utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  header: string;

  onClose: () => void;
};

type State = {
  willNotShow: boolean;
  ref: ReturnType<typeof React.createRef<HTMLDivElement>>;
};

const Modal = ({
  isOpened,
  className,
  onClose,
  onKeyDown,
  onClick,
  header,
  children,
  ...rest
}: Props) => {
  const [willNotShow, setWillNotShow] = useState<State["willNotShow"]>(false);
  const ref = useRef<HTMLDivElement>(null);
  const className_ =
    `cm-modal ${className ?? ""} ${isOpened ? "opened" : ""} ${willNotShow ? "closing" : ""}`
      .replace(/\s\s+/g, " ")
      .trim();

  const close = useCallback(async () => {
    setWillNotShow(true);
    await new Promise((r) => setTimeout(r, 0.3 * 1000)); // animation
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = "hidden";
      setWillNotShow(false);
      ref.current?.focus();
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpened, ref]);

  return (
    <div
      className={className_}
      ref={ref}
      tabIndex={0}
      onClick={(e) => {
        close();
        onClick && onClick(e);
      }}
      onKeyDown={(e) => {
        if (isEscKeyPressed(e)) {
          close();
          return;
        }
        onKeyDown && onKeyDown(e);
      }}
      {...rest}
    >
      {isOpened && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="header">
            {header}
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
          </div>
          <div className="content">{children}</div>
          <div className="footer">
            <button className="closeBtn" onClick={close}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
