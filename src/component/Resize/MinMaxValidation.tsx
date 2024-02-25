import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { minMaxSnippets } from "./snippets";
import { useState } from "react";
import Split from "../../AMultiLayoutSplitter/dist";

function MinMaxValidation() {
  const [maxSample, setMaxSample] = useState(false);
  return (
    <div>
      <Heading content="Min and Max validation" />
      <div>
        <p>Note: The minimum and maximum values can range from 0 to 100 only. Additionally, these values are percentage-based.</p>
        <p>The splitter feature enables you to define minimum and maximum sizes for each pane. Resizing beyond these limits will be restricted.</p>
      </div>
      <div className="snippet-container">
        <SyntaxHighlighter>{minMaxSnippets}</SyntaxHighlighter>
      </div>
      <div>
        <div className="sample-button">
          <button onClick={() => setMaxSample(true)}>Sample</button>
        </div>
        <div className="sample-container">
          {maxSample && (
            <Split mode="horizontal" minSizes={[20, 20]} maxSizes={[80, 80]}>
              <div>Pane 1</div>
              <div>Pane 2</div>
            </Split>
          )}
        </div>
      </div>
    </div>
  );
}

export default MinMaxValidation;
