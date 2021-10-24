/* eslint-disable jest/prefer-expect-assertions */
import { render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { ReactSlidingPane } from '../react-sliding-pane';

const RIGHT_PANE_CONTENT = 'right-pane-content';
const LEFT_PANE_CONTENT = 'left-pane-content';

const App = () => {
  const [state, setState] = useState<{isPaneOpen?:boolean, isPaneOpenLeft?: boolean}>({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div>
      <button onClick={() => setState({ isPaneOpen: true })}>
        Click me to open right pane!
      </button>
      <button onClick={() => setState({ isPaneOpenLeft: true })}>
        Click me to open left pane with 20% width!
      </button>
      <ReactSlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => setState({ isPaneOpen: false })}
      >
        <div data-testid={RIGHT_PANE_CONTENT}>And I am pane content. BTW, what rocks?</div>
      </ReactSlidingPane>
      <ReactSlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="200px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div data-testid={LEFT_PANE_CONTENT}>And I am pane content on left.</div>
      </ReactSlidingPane>
    </div>
  );
};

describe('render', () => {
  it('render nothing on closed state', () => {
    render(<App />);

    expect(screen.queryByTestId(LEFT_PANE_CONTENT)).toBeNull();
  });
});
