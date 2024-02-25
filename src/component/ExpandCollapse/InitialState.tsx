import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { specifyInitialStateSnippet } from "./snippets";
import { useState } from "react";
import Split from "../../AMultiLayoutSplitter/dist";

function InitialState() {
  const [initialStateSample, setInitialStateSample] = useState(false);
  return (
    <div>
      <Heading content="Specify initial State for panes" />
      <div>
        <p className="note">Note: To utilize the collapsed property effectively, it is necessary to provide an initial size for each pane.</p>
      </div>
      <div>
        <p>
          By default, panes are open. If you wish to specify the initial state for expanding and collapsing, you can utilize the{" "}
          <span className="code">
            <strong>{`collapsed`}</strong>
          </span>{" "}
          property. It accepts a boolean value where 'true' indicates that the pane should be closed, while 'false' indicates that it should be
          expanded.
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{specifyInitialStateSnippet}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setInitialStateSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {initialStateSample && (
            <Split mode="horizontal" initialSizes={["200px", "200px", "200px"]} collapsed={[true, false, true]} width="600px" height="100px">
              <div>Pane 1</div>
              <div>Pane 2</div>
              <div>Pane 3</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default InitialState;
