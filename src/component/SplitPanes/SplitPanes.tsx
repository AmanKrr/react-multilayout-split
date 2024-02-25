import HorizontalLayout from "./HorizontalLayout";
import MultiPanes from "./Multipanes";
import VerticalLayout from "./VerticalLayout";

function SplitPanes() {
  return (
    <div className="ex-container">
      <HorizontalLayout />
      <VerticalLayout />
      <MultiPanes />
    </div>
  );
}

export default SplitPanes;
