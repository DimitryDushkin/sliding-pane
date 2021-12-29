/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

import "./react-sliding-pane.css";

const CLOSE_TIMEOUT = 500;

type Props = {
  isOpen?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  from?: "left" | "right" | "bottom" | "top"; // "right" — default
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  width?: string; // CSS string for width
  height?: string; // CSS string for height
  closeIcon?: React.ReactNode;
  shouldCloseOnEsc?: boolean;
  hideHeader?: boolean;
  onRequestClose: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};

function useUpdateStateIfMounted<T>(initialValue: T) {
  const isMountedRef = useRef(true);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  const useStateResult = useState(initialValue);
  const state = useStateResult[0];
  const setState = useStateResult[1];

  const setStateIfMounted = (value: T) => {
    if (isMountedRef.current === true) {
      setState(value);
    }
  };

  return [state, setStateIfMounted] as const;
}

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
  width = getDefaultWidth(from),
  height = getDefaultHeight(from),
  shouldCloseOnEsc,
  hideHeader = false,
}: Props) {
  const directionClass = `slide-pane_from_${from}`;

  // Not usign array destruction to reduce bundle size by not introducing polyfill
  const state = useUpdateStateIfMounted(false);
  const wasOpen = state[0];
  const setWasOpen = state[1];

  const handleAfterOpen = () => {
    // Timeout fixes animation in Safari
    onAfterOpen?.();
    setTimeout(() => {
      setWasOpen(true);
    }, 0);
  };

  const handleAfterClose = () => {
    onAfterClose?.();
    setTimeout(() => {
      setWasOpen(false);
    }, 0);
  };

  return (
    <Modal
      ariaHideApp={false}
      overlayClassName={{
        base: `slide-pane__overlay ${overlayClassName || ""}`,
        afterOpen: wasOpen ? "overlay-after-open" : "",
        beforeClose: "overlay-before-close",
      }}
      className={{
        base: `slide-pane ${directionClass} ${className || ""}`,
        afterOpen: wasOpen ? "content-after-open" : "",
        beforeClose: "content-before-close",
      }}
      style={{
        content: {
          width,
          height,
          ...(from === "bottom" ? { marginTop: calcMarginTop(height) } : {}),
        },
      }}
      closeTimeoutMS={CLOSE_TIMEOUT}
      isOpen={isOpen ?? false}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
      onRequestClose={onRequestClose}
      contentLabel={`Modal "${title || ""}"`}
    >
      {!hideHeader && (
        <div className="slide-pane__header">
          <div
            className="slide-pane__close"
            onClick={onRequestClose}
            role="button"
            tabIndex={0}
          >
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

function getDefaultWidth(from: Props["from"]): string {
  return from === "left" || from === "right" ? "80%" : "100%";
}

function getDefaultHeight(from: Props["from"]): string {
  return from === "bottom" || from === "top" ? "80%" : "100%";
}

function calcMarginTop(height: string): string {
  const isPercentageValue = /%/.test(height);
  if (isPercentageValue) {
    const heightInDecimalValue = parseFloat(height.split("%")[0]) / 100;
    return `calc(100vh - (${heightInDecimalValue} * 100vh))`;
  }
  return `calc(100vh - ${height})`;
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
