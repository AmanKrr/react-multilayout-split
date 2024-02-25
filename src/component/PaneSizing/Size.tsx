import { useState } from "react";
import Heading from "../Global/Heading";
import Split from "../../AMultiLayoutSplitter/dist";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { mxSinppet, prSinppet, pxSinppet, sizeSnippet } from "./snippet";

function Size() {
  const [splitterSizeSample, setSplitterSizeSample] = useState(false);
  const [splitterPaneSizePxSample, setSplitterPaneSizePxSample] = useState(false);
  const [splitterPaneSizePerSample, setSplitterPaneSizePerSample] = useState(false);
  const [splitterPaneSizeMixSample, setSplitterPaneSizeMixSample] = useState(false);
  return (
    <div>
      <div>
        <Heading content="Splitter size" />
        <div>
          <p>
            You can define the size of the splitter using the{" "}
            <span className="code">
              <strong>{`width`}</strong>
            </span>{" "}
            and{" "}
            <span className="code">
              <strong>{`height`}</strong>
            </span>{" "}
            properties.
          </p>
        </div>
        <div className="snippet-container">
          <SyntaxHighlighter>{sizeSnippet}</SyntaxHighlighter>
        </div>
        <div>
          <div className="sample-button">
            <button onClick={() => setSplitterSizeSample(true)}>Sample</button>
          </div>
          <div className="sample-container">
            {splitterSizeSample && (
              <Split mode="horizontal" width="200px" height="100px">
                <div>Pane 1</div>
                <div>Pane 2</div>
              </Split>
            )}
          </div>
        </div>
      </div>
      <div>
        <Heading content="Spitter pane size" />
        <div>
          <p>You can also define the sizes for splitter pane using initialSizes property. It accepts an array or string.</p>
          <p>Splitter pane sizes supports pixel and percentage. You can provie combination of pixel and percentage also.</p>
        </div>
        <div>
          <div className="sample-button">
            <button
              onClick={() => {
                setSplitterPaneSizePxSample(true);
                setSplitterPaneSizePerSample(true);
                setSplitterPaneSizeMixSample(true);
              }}
            >
              Sample
            </button>
          </div>
          <div>
            <div>
              <p>Sizes in pixel</p>
            </div>
            <div className="snippet-container">
              <SyntaxHighlighter>{pxSinppet}</SyntaxHighlighter>
            </div>
            <div className="sample-container">
              {splitterPaneSizePxSample && (
                <Split mode="horizontal" width="200px" height="100px" initialSizes={["100px", "100px"]}>
                  <div>Pane 1</div>
                  <div>Pane 2</div>
                </Split>
              )}
            </div>
            <div>
              <p>Sizes in percentage</p>
            </div>
            <div className="snippet-container">
              <SyntaxHighlighter>{prSinppet}</SyntaxHighlighter>
            </div>
            <div className="sample-container">
              {splitterPaneSizePerSample && (
                <Split mode="horizontal" width="200px" height="100px" initialSizes={["50%", "50%"]}>
                  <div>Pane 1</div>
                  <div>Pane 2</div>
                </Split>
              )}
            </div>
            <div>
              <p>Sizes in pixel and percentage both.</p>
            </div>
            <div className="snippet-container">
              <SyntaxHighlighter>{mxSinppet}</SyntaxHighlighter>
            </div>
            <div className="sample-container">
              {splitterPaneSizeMixSample && (
                <Split mode="horizontal" width="200px" height="100px" initialSizes={["100px", "50%"]}>
                  <div>Pane 1</div>
                  <div>Pane 2</div>
                </Split>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Size;
