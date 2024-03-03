import Heading from "../Global/Heading";

function Orientation() {
  return (
    <div>
      <Heading content="Orientation (mode)" />
      <div>
        <p>
          The Splitter component supports both horizontal and vertical orientations for its panes. By default, it will not be rendered in any specific
          orientation. However, you can change the orientation by setting the mode property to either 'horizontal' or 'vertical'.
        </p>
      </div>
    </div>
  );
}

export default Orientation;
