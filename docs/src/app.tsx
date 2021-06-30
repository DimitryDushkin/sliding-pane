import React, { Component } from "react";
import { render } from "react-dom";
// import { ReactSlidingPane } from 'react-sliding-pane';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import ReactSlidingPane from "../../src/react-sliding-pane";
import "../../src/react-sliding-pane.css";

type State = {
  isPaneOpen: boolean;
  isPaneOpenLeft: boolean;
  isPaneOpenBottom: boolean;
};

class App extends Component<{}, State> {
  el?: HTMLDivElement | null;

  constructor(props: {}) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false,
      isPaneOpenBottom: false,
    };
  }

  render() {
    return (
      <div ref={(ref) => (this.el = ref)}>
        <button onClick={() => this.setState({ isPaneOpen: true })}>
          Open right pane
        </button>
        <div style={{ marginTop: "32px" }}>
          <button onClick={() => this.setState({ isPaneOpenLeft: true })}>
            Open left pane with 20% width and hidden header
          </button>
          <button onClick={() => this.setState({ isPaneOpenBottom: true })}>
            Open bottom pane
          </button>
        </div>
        <ReactSlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Hey, it is optional pane title.  I can be React component too."
          subtitle="Optional subtitle."
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <Content />
        </ReactSlidingPane>
        <ReactSlidingPane
          isOpen={this.state.isPaneOpenLeft}
          title="Hey, it is optional pane title.  I can be React component too."
          from="left"
          width="200px"
          onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
          hideHeader={true}
        >
          <div style={{ height: "110vh" }}>And I am pane content on left.</div>
        </ReactSlidingPane>
        <ReactSlidingPane
          isOpen={this.state.isPaneOpenBottom}
          title="Hey, it is optional pane title.  I can be React component too."
          from="bottom"
          width="100%"
          onRequestClose={() => this.setState({ isPaneOpenBottom: false })}
        >
          <div>And I am pane content on the bottom.</div>
        </ReactSlidingPane>
      </div>
    );
  }
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

render(<App />, document.getElementById("app"));
