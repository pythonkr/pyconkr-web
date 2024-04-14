import React, { useCallback, useEffect, useRef, useState } from "react";
import { isEscKeyPressed } from "utils";
import "./style.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  header: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;

  onConfirmed: () => void;
  onCanceled: () => void;
};

type State = {
  willNotShow: boolean;
  ref: ReturnType<typeof React.createRef<HTMLDivElement>>;
};

const Dialog = ({
  isOpened,
  onConfirmed,
  onCanceled,
  confirmLabel,
  cancelLabel,
  header,
  isLoading,
  className,
  onKeyDown,
  children,
  ...rest
}: Props) => {
  const [willNotShow, setWillNotShow] = useState<State["willNotShow"]>(false);
  const ref = useRef<HTMLDivElement>(null);
  const className_ =
    `cm-dialog ${className ?? ""} ${isOpened ? "opened" : ""} ${willNotShow ? "closing" : ""}`
      .replace(/\s\s+/g, " ")
      .trim();

  const close = useCallback(async () => {
    setWillNotShow(true);
    await new Promise((r) => setTimeout(r, 0.3 * 1000)); // animation
    onCanceled();
  }, [onCanceled]);

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
          <div className="header">{header}</div>
          <div className="content">{children}</div>
          <div className="footer">
            <button className="confirmBtn" onClick={onConfirmed}>
              {confirmLabel ?? "확인"}
            </button>
            <button className="closeBtn" onClick={onCanceled}>
              {cancelLabel ?? "취소"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
