import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { collapsibleDisabledSnippet, collapsibleSnippet } from "./snippets";
import Split from "../../AMultiLayoutSplitter/dist";
import { useState } from "react";

function Collapsible() {
  const [collapse, setCollapse] = useState(false);
  const [disbaledCollpase, setDisabledCollpased] = useState(false);

  return (
    <div>
      <Heading content="Collapsible panes" />
      <div>
        <p>
          The Splitter panes can be configured with built-in expand and collapse functionalities. By default, the collapsible behavior is enabled,
          allowing users to collapse and expand the panes. However, if you want to disable this collapsible and expandable behavior, you can use the
          lineBar property. Passing this property will disable the collapse and expand feature for the Splitter panes.
        </p>
      </div>
      <div>
        <div>
          <p>
            <strong>By Default enabled collapse and expand.</strong>
          </p>
        </div>
        <div>
          <SyntaxHighlighter>{collapsibleSnippet}</SyntaxHighlighter>
        </div>
        <div>
          <div className="sample-button">
            <button onClick={() => setCollapse(true)}>Sample</button>
          </div>
          <div className="sample-container">
            {collapse && (
              <Split mode="horizontal">
                <div>Pane 1</div>
                <div>Pane 2</div>
              </Split>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            <strong>Disabled collapse and expand.</strong>
          </p>
        </div>
        <div>
          <SyntaxHighlighter>{collapsibleDisabledSnippet}</SyntaxHighlighter>
        </div>
        <div className="sample-button">
          <button onClick={() => setDisabledCollpased(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {disbaledCollpase && (
            <Split mode="horizontal" lineBar>
              <div>Pane 1</div>
              <div>Pane 2</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
