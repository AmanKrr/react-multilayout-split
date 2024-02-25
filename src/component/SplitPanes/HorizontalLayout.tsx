import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { horizontalLayoutSnipptes } from "./snippets";
import Split from "../../AMultiLayoutSplitter/dist";
import { useState } from "react";

function HorizontalLayout() {
  const [horizontalSample, setHorizontalSample] = useState(false);
  return (
    <div>
      <Heading content="Horizontal Layout" />
      <div>
        <p>
          To set a horizontal layout, you can utilize the mode property with the value{" "}
          <span className="code">
            <strong>{`mode='horizontal'`}</strong>
          </span>{" "}
          . This configures the Splitter container to split its panes in a horizontal flow direction, with vertical drag handlebars.
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{horizontalLayoutSnipptes}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setHorizontalSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {horizontalSample && (
            <Split mode="horizontal">
              <div>Pane 1</div>
              <div>Pane 2</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default HorizontalLayout;
