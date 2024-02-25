import Collapsible from "./Collapsible";
import InitialState from "./InitialState";
import ProgramaticallyExpandCollapse from "./ProgramaticallyExpandCollapse";
import SpecificCollapsible from "./SpecificCollapsible";

function ExpandCollpase() {
  return (
    <div className="ex-container">
      <Collapsible />
      <SpecificCollapsible />
      <InitialState />
      <ProgramaticallyExpandCollapse />
    </div>
  );
}

export default ExpandCollpase;
