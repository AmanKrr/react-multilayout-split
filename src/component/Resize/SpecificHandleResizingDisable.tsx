import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Heading from "../Global/Heading";
import Split from "../../AMultiLayoutSplitter/dist";
import { disableResizingSnippets, disableSpecificResizingSnippets } from "./snippets";

function SpecificHandleResizingDisable() {
  const [preventResizing, setPreventResizing] = useState(false);
  return (
    <div>
      <Heading content="Disable specific handle resizing" />
      <div>
        <p>
          The splitter also offers the feature to disable resizing of sections by using the{" "}
          <span className="code">
            <strong>{`disable`}</strong>
          </span>{" "}
          property to disable specific handlebars.
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{disableSpecificResizingSnippets}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setPreventResizing(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {preventResizing && (
            <Split mode="horizontal" disable={[1, 2]}>
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

export default SpecificHandleResizingDisable;
