import { useState } from "react";
import DocOptionLayout from "./component/DocOptionLayout";
import GetStarted from "./component/DocumentationLayout/GetStarted/GetStarted";
import Home from "./component/Home";
import "./styles/index.css";

function App() {
  const [diveIn, setDiveIn] = useState(false);
  return (
    <main>
      <p className="tempBanner">Documentation is in progress. Please go through github readme for overview.</p>
      {!diveIn && <Home setDiveIn={setDiveIn} />}
      {diveIn && <DocOptionLayout />}
      {/* <GetStarted /> */}
    </main>
  );
}

export default App;
