import Heading from "../Global/Heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { addToProject } from "./snippets";
import { useState } from "react";
import { Split } from "a-multilayout-splitter";

function AddingSplitter() {
  const [addToProjectSample, setAddToProjectSample] = useState(false);
  return (
    <>
      <Heading content="Adding Splitter" />
      <div>
        <p>
          The splitter can be initialized using the{" "}
          <span className="code">
            <strong>{`<Split>`}</strong>
          </span>{" "}
          component, with its child elements representing the components you want to split. By default, the splitter has a width and height of 400
          pixels. If no dimensions are explicitly provided, it will use these default dimensions and distribute the size accordingly among its panes.
        </p>
      </div>
      <div>
        <div>
          <p className="code-snippet">Code snippet</p>
        </div>
        <div className="snippet-container">
          <SyntaxHighlighter>{addToProject}</SyntaxHighlighter>
        </div>
        <div>
          <div className="sample-button">
            <button onClick={() => setAddToProjectSample(true)}>Sample</button>
          </div>
          <div className="sample-container">
            {addToProjectSample && (
              <Split id="spit1" mode="horizontal">
                <div>Pane 1</div>
                <div>Pane 2</div>
              </Split>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddingSplitter;
