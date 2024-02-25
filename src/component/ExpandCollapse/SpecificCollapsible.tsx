import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { specificCollapseDisabledSnippet } from "./snippets";
import { useState } from "react";
import Split from "../../AMultiLayoutSplitter/dist";

function SpecificCollapsible() {
  const [specificSample, setSpecificSample] = useState(false);
  return (
    <div>
      <Heading content="Enable Collapsible and Expandable Functionality for Specific Handle Bars" />
      <div>
        <p>
          If you wish to disable the collapsible and expandable functionality for specific handlebars, you can utilize the{" "}
          <span className="code">
            <strong>{`lineBar`}</strong>
          </span>{" "}
          property by providing an array containing the positions of the handlebars.
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{specificCollapseDisabledSnippet}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setSpecificSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {specificSample && (
            <Split mode="horizontal" lineBar={[1, 3]}>
              <div>Pane 1</div>
              <div>Pane 2</div>
              <div>Pane 3</div>
              <div>Pane 4</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecificCollapsible;
