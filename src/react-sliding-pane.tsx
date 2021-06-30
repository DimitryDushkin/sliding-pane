import React from "react";
import Modal from "react-modal";

import "./react-sliding-pane.css";

const CLOSE_TIMEOUT = 500;

type Props = {
  isOpen: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  from?: "left" | "right" | "bottom"; // "right" — default
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  width?: string; // CSS string for width
  closeIcon?: React.ReactNode;
  shouldCloseOnEsc?: boolean;
  hideHeader?: boolean;
  onRequestClose: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};

export function ReactSlidingPane({
  isOpen,
  title,
  subtitle,
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  children,
  className,
  overlayClassName,
  closeIcon,
  from = "right",
  width,
  shouldCloseOnEsc,
  hideHeader = false,
}: Props) {
  const directionClass = `slide-pane_from_${from}`;

  // Reduce bundle size by removing polyfill if array destruction
  const state = React.useState(false);

  // hold a "mounted" state to handle timeout / async code execution
  const mounted = React.useRef(false);
  React.useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false };
  }, [])

  const wasOpen = state[0];
  const setWasOpen = state[1];
  const handleAfterOpen = React.useCallback(() => {
    setTimeout(() => {
        if (mounted.current) {
          setWasOpen(true);
          onAfterOpen?.();
        }
      }, 0);
  }, [onAfterOpen, setWasOpen]);

  const handleAfterClose = React.useCallback(() => {
    setTimeout(() => {
        if (mounted.current) {
          setWasOpen(false);
          onAfterClose?.();
        }
      }, 0);
  }, [onAfterClose, setWasOpen]);

  return (
    <Modal
      ariaHideApp={false}
      overlayClassName={{
        base: `slide-pane__overlay ${overlayClassName || ""}`,
        afterOpen: wasOpen ? "overlay-after-open" : '',
        beforeClose: "overlay-before-close"
      }}
      className={{
        base: `slide-pane ${directionClass} ${className || ""}`,
        afterOpen: wasOpen ? "content-after-open" : '',
        beforeClose: "content-before-close"
      }}
      style={{
        content: { width: width || "80%" },
      }}
      closeTimeoutMS={CLOSE_TIMEOUT}
      isOpen={isOpen}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
      onRequestClose={onRequestClose}
      contentLabel={`Modal "${title || ""}"`}
    >
      {!hideHeader && (
        <div className="slide-pane__header">
          <div className="slide-pane__close" onClick={onRequestClose}>
            {closeIcon || <IconClose />}
          </div>
          <div className="slide-pane__title-wrapper">
            <h2 className="slide-pane__title">{title}</h2>
            <div className="slide-pane__subtitle">{subtitle}</div>
          </div>
        </div>
      )}
      <div className="slide-pane__content">{children}</div>
    </Modal>
  );
}

function IconClose() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 22">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
      />
    </svg>
  );
}

export default ReactSlidingPane;
