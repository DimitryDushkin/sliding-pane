import React, { Component, useRef, useState } from 'react';
import { render } from 'react-dom';
// import { ReactSlidingPane } from 'react-sliding-pane';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import ReactSlidingPane from '../../src/react-sliding-pane';
import '../../src/react-sliding-pane.css';

function App() {
  const rootRef = useRef<HTMLDivElement | null>();

  const [paneOpened, setOpenedPane] = useState<'right'|'left'|'bottom'|null>(null);

  return (
    <div ref={rootRef}>
      <button onClick={() => setOpenedPane('right')}>
        Open right pane
      </button>
      <div style={{ marginTop: '32px' }}>
        <button onClick={() => setOpenedPane('left')}>
          Open left pane with 20% width and hidden header
        </button>
        <button onClick={() => setOpenedPane('bottom')}>
          Open bottom pane
        </button>
      </div>
      <ReactSlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={paneOpened === 'right'}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setOpenedPane(null);
        }}
      >
        <Content />
      </ReactSlidingPane>
      <ReactSlidingPane
        isOpen={paneOpened === 'left'}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="200px"
        onRequestClose={() => setOpenedPane(null)}
        hideHeader
      >
        <div style={{ height: '110vh' }}>And I am pane content on left.</div>
      </ReactSlidingPane>
      <ReactSlidingPane
        isOpen={paneOpened === 'bottom'}
        title="Hey, it is optional pane title.  I can be React component too."
        from="bottom"
        width="100%"
        onRequestClose={() => setOpenedPane(null)}
      >
        <div>And I am pane content on the bottom.</div>
      </ReactSlidingPane>
    </div>
  );
}

class Content extends Component {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line
    console.log("contructor");
  }

  componentDidMount() {
    // eslint-disable-next-line
    console.log("mount");
  }

  render() {
    return (
      <div>
        <div>And I am pane content. BTW, what rocks?</div>
        <p>Contructor and componentDidMount called every time pane opens.</p>
        <br />
        <img src="img.png" />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
