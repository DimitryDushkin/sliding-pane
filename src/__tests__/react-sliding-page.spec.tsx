/* eslint-disable react/require-default-props */
/* eslint-disable jest/prefer-expect-assertions */
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React, { useState } from "react";
import { ReactSlidingPane } from "../react-sliding-pane";
import "@testing-library/jest-dom";

const RIGHT_PANE_CONTENT = "right-pane-content";
const LEFT_PANE_CONTENT = "left-pane-content";
const RIGHT_PANE_OVERLAY = "some-custom-overlay-class";
const CLOSE_TIMEOUT = 500;

const App = ({
  onAfterOpen,
  onAfterClose,
}: {
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}) => {
  const [state, setState] = useState<{
    isRightPaneOpen?: boolean;
    isLeftPaneOpen?: boolean;
  }>({
    isRightPaneOpen: false,
    isLeftPaneOpen: false,
  });

  return (
    <div>
      <button
        onClick={() => setState({ isRightPaneOpen: true })}
        data-testid="open-right-pane"
      >
        Click me to open right pane!
      </button>
      <button
        onClick={() => setState({ isLeftPaneOpen: true })}
        data-testid="open-left-pane"
      >
        Click me to open left pane with 20% width!
      </button>
      <ReactSlidingPane
        className="some-custom-class"
        overlayClassName={RIGHT_PANE_OVERLAY}
        isOpen={state.isRightPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => setState({ isRightPaneOpen: false })}
        onAfterOpen={onAfterOpen}
        onAfterClose={onAfterClose}
      >
        <div data-testid={RIGHT_PANE_CONTENT}>
          And I am pane content. BTW, what rocks?
        </div>
      </ReactSlidingPane>
      <ReactSlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isLeftPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="200px"
        onRequestClose={() => setState({ isLeftPaneOpen: false })}
      >
        <div data-testid={LEFT_PANE_CONTENT}>
          And I am pane content on left.
        </div>
      </ReactSlidingPane>
    </div>
  );
};

async function wait(time: number) {
  return new Promise((r) => setTimeout(r, time));
}

describe("render", () => {
  it("do not render on closed state", () => {
    render(<App />);

    expect(screen.queryByTestId(LEFT_PANE_CONTENT)).toBeNull();
    expect(screen.queryByTestId(RIGHT_PANE_CONTENT)).toBeNull();
  });

  it("render content on opened state", async () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("open-right-pane"));

    await waitFor(() => screen.getByTestId(RIGHT_PANE_CONTENT));

    expect(screen.getByTestId(RIGHT_PANE_CONTENT)).toHaveTextContent(
      "And I am pane content. BTW, what rocks?"
    );

    expect(screen.queryByTestId(LEFT_PANE_CONTENT)).toBeNull();
  });

  it("do not render content upon toggle state", async () => {
    jest.useFakeTimers();
    const onAfterOpen = jest.fn();
    const onAfterClose = jest.fn();

    render(<App onAfterOpen={onAfterOpen} onAfterClose={onAfterClose} />);

    fireEvent.click(screen.getByTestId("open-right-pane"));

    const contentEl = await waitFor(() =>
      screen.getByTestId(RIGHT_PANE_CONTENT)
    );

    act(() => {
      jest.runAllTimers();
    });
    expect(onAfterOpen).toHaveBeenCalledTimes(1);

    fireEvent.click(document.querySelector(`.${RIGHT_PANE_OVERLAY}`));

    await waitForElementToBeRemoved(contentEl);

    act(() => {
      jest.runAllTimers();
    });
    expect(onAfterOpen).toHaveBeenCalledTimes(1);
    expect(onAfterClose).toHaveBeenCalledTimes(1);

    expect(screen.queryByTestId(RIGHT_PANE_CONTENT)).toBeNull();

    jest.useRealTimers();
  });
});
