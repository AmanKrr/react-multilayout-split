import MinMaxValidation from "./MinMaxValidation";
import PreventResizing from "./PreventResizing";
import RenderCustomHandleBar from "./RenderCustomHandleBar";
import SpecificHandleResizingDisable from "./SpecificHandleResizingDisable";

function Resize() {
  return (
    <div className="ex-container">
      <MinMaxValidation />
      <PreventResizing />
      <SpecificHandleResizingDisable />
      <RenderCustomHandleBar />
    </div>
  );
}

export default Resize;
