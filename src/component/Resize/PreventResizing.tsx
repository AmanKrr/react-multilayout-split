import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Heading from "../Global/Heading";
import Split from "../../AMultiLayoutSplitter/dist";
import { disableResizingSnippets } from "./snippets";

function PreventResizing() {
  const [preventResizing, setPreventResizing] = useState(false);
  return (
    <div>
      <Heading content="Disable Resizing" />
      <div>
        <p>
          The splitter feature includes a{" "}
          <span className="code">
            <strong>{`disable`}</strong>
          </span>{" "}
          property, allowing you to disable the resize functionality."
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{disableResizingSnippets}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setPreventResizing(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {preventResizing && (
            <Split mode="horizontal" disable>
              <div>Pane 1</div>
              <div>Pane 2</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreventResizing;
