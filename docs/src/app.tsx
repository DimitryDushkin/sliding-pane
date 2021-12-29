import React, { Component, StrictMode, useRef, useState } from "react";
import { render } from "react-dom";

import ReactSlidingPane from "../../src/react-sliding-pane";
import "../../src/react-sliding-pane.css";

function App() {
  const rootRef = useRef<HTMLDivElement | null>();

  const [paneOpened, setOpenedPane] = useState<
    "right" | "left" | "bottom" | "top" | null
  >(null);

  return (
    <StrictMode>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "calc(100vw - 64px)",
          height: "calc(100vh - 64px)",
        }}
        ref={rootRef}
      >
        <div>
          <button onClick={() => setOpenedPane("top")}>Open top pane</button>
        </div>
        <div style={{ margin: "32px 0" }}>
          <button
            style={{ marginRight: "32px" }}
            onClick={() => setOpenedPane("left")}
          >
            Open left pane
          </button>
          <button onClick={() => setOpenedPane("right")}>
            Open right pane
          </button>
        </div>
        <button onClick={() => setOpenedPane("bottom")}>
          Open bottom pane
        </button>
        <ReactSlidingPane
          isOpen={paneOpened === "top"}
          title="Hey, it is optional pane title.  I can be React component too."
          from="top"
          height="auto"
          onRequestClose={() => setOpenedPane(null)}
          hideHeader
        >
          <div>And I am pane content on top and my height is set to auto.</div>
        </ReactSlidingPane>
        <ReactSlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={paneOpened === "right"}
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
          isOpen={paneOpened === "left"}
          title="Hey, it is optional pane title.  I can be React component too."
          from="left"
          width="200px"
          onRequestClose={() => setOpenedPane(null)}
          hideHeader
        >
          <div style={{ height: "110vh" }}>
            And I am pane content on left and I have 200px of width.
          </div>
        </ReactSlidingPane>
        <ReactSlidingPane
          isOpen={paneOpened === "bottom"}
          title="Hey, it is optional pane title.  I can be React component too."
          from="bottom"
          width="100%"
          height="20%"
          onRequestClose={() => setOpenedPane(null)}
        >
          <div>
            And I am pane content on the bottom and I have a height of 20%.
          </div>
        </ReactSlidingPane>
      </div>
    </StrictMode>
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
        <p>Constructor and componentDidMount called every time pane opens.</p>
        <br />
        <img src="img.png" />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
