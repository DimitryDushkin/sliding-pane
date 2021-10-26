/* eslint-disable jest/prefer-expect-assertions */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { useState } from "react";
import { ReactSlidingPane } from "../react-sliding-pane";
import "@testing-library/jest-dom";

const RIGHT_PANE_CONTENT = "right-pane-content";
const LEFT_PANE_CONTENT = "left-pane-content";

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
        overlayClassName="some-custom-overlay-class"
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

  it("do not render content upon toggle state", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("open-right-pane"));

    await waitFor(() => screen.getByTestId(RIGHT_PANE_CONTENT));

    fireEvent.click(screen.getByTestId("open-right-pane"));
  });
});
