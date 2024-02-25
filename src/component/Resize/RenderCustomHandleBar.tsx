import Heading from "../Global/Heading";

function RenderCustomHandleBar() {
  return (
    <div>
      <Heading content="Render custom handle bar" />
      <div>
        <p>
          Currently, custom handlebars do not support the 'disable' and 'lineBar' properties. Instead, you can utilize the{" "}
          <span className="code">
            <strong>{`renderBar`}</strong>
          </span>{" "}
          property to implement your own handlebar.
        </p>
      </div>
    </div>
  );
}

export default RenderCustomHandleBar;
