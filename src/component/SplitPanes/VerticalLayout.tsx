import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { verticalLayoutSnippets } from "./snippets";
import Split from "../../AMultiLayoutSplitter/dist";
import { useState } from "react";

function VerticalLayout() {
  const [verticalSample, setVerticalSample] = useState(false);
  return (
    <div>
      <Heading content="Vertical Layout" />
      <div>
        <p>
          To establish a vertical layout, apply the mode property within the{" "}
          <span className="code">
            <strong>{`<split>`}</strong>
          </span>{" "}
          component as{" "}
          <span className="code">
            <strong>{`mode='vertical'`}</strong>
          </span>{" "}
          . This configuration divides the Splitter container into panes aligned in a vertical flow direction, featuring horizontal drag handlebars.
        </p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{verticalLayoutSnippets}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setVerticalSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {verticalSample && (
            <Split mode="vertical">
              <div>Pane 1</div>
              <div>Pane 2</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerticalLayout;
