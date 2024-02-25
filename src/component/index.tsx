import { useState } from "react";
import ExpandCollpase from "./ExpandCollapse/ExpandCollapse";
import GetStarted from "./GetStarted/GetStarted";
import Navbar from "./Navbar";
import PaneSizing from "./PaneSizing/PaneSizing";
import Resize from "./Resize/Resize";
import Sidebar from "./Sidebar";
import SplitPanes from "./SplitPanes/SplitPanes";

function Index() {
  const [content, setContent] = useState(1);
  return (
    <div className="content-container">
      <Navbar />
      <div className="column-layout">
        <Sidebar content={content} setContent={setContent} />
        <div className="doc-container">
          {content === 1 && <GetStarted />}
          {content === 2 && <ExpandCollpase />}
          {content === 3 && <SplitPanes />}
          {content === 4 && <Resize />}
          {content === 5 && <PaneSizing />}
        </div>
      </div>
    </div>
  );
}

export default Index;
