import { useState } from "react";
import Heading from "../Global/Heading";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { multiLayoutSnippets } from "./snippets";
import Split from "../../AMultiLayoutSplitter/dist";

function MultiPanes() {
  const [multiSample, setMultiSample] = useState(false);
  return (
    <div>
      <Heading content="Multiple Layout" />
      <div>
        <p>You can render multiple panes in both horizontal and vertical modes.</p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{multiLayoutSnippets}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setMultiSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {multiSample && (
            <Split mode="horizontal">
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

export default MultiPanes;
