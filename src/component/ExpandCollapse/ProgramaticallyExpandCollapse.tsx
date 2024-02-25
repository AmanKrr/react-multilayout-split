import { useState } from "react";
import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { collapseProgramaticallySnippet } from "./snippets";
import Split from "../../AMultiLayoutSplitter/dist";
import SplitUtils from "../../AMultiLayoutSplitter/dist/utils/SplitUtils";

function ProgramaticallyExpandCollapse() {
  const [collapseSample, setCollpaseSample] = useState(false);
  return (
    <div>
      <Heading content="Collpase and Expand programatically." />
      <div>
        <p>
          SplitUtils, accessible globally within Split, offers two methods:{" "}
          <span className="code">
            <strong>{`openSplitter`}</strong>
          </span>{" "}
          and{" "}
          <span className="code">
            <strong>{`closeSplitter`}</strong>
          </span>{" "}
          . These functions facilitate the expansion and collapse of panes. Simply specify the pane number you wish to expand or collapse, along with
          the desired mode—horizontal or vertical—depending on the orientation you're interacting with.
        </p>
      </div>
      <div>
        <div>
          <p>
            <strong>Collapse/Expand</strong>
          </p>
        </div>
        <div className="snippet-container">
          <SyntaxHighlighter>{collapseProgramaticallySnippet}</SyntaxHighlighter>
        </div>
        <div>
          <div className="sample-button">
            <button onClick={() => setCollpaseSample(true)}>Sample</button>
          </div>
          <div className="sample-container">
            {collapseSample && (
              <div style={{ display: "block" }}>
                <Split mode="horizontal">
                  <div>Pane 1</div>
                  <div>Pane 2</div>
                  <div>Pane 3</div>
                  <div>Pane 4</div>
                </Split>
                <div>
                  <button onClick={() => SplitUtils.closeSplitter(2, "horizontal")}>Collpase</button>
                  <button onClick={() => SplitUtils.openSplitter(2, "horizontal")}>Expand</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramaticallyExpandCollapse;
