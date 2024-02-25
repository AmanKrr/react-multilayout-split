export const collapsibleSnippet = `<Split mode='horizontal'>
  <div>Pane 1</div>
  <div>Pane 2</div>
</Split>`;
export const collapsibleDisabledSnippet = `<Split mode='horizontal' lineBar>
  <div>Pane 1</div>
  <div>Pane 2</div>
</Split>`;
export const specificCollapseDisabledSnippet = `<Split mode='horizontal' lineBar={[1, 3]}>
  <div>Pane 1</div>
  <div>Pane 2</div>
  <div>Pane 3</div>
  <div>Pane 4</div>
</Split>`;
export const specifyInitialStateSnippet = `<Split 
  mode='horizontal' 
  initialSizes={["200px", "200px", "200px"]} 
  collapsed={[true, false, true]} 
  width="600px" 
  height="100px"
  >
    <div>Pane 1</div>
    <div>Pane 2</div>
    <div>Pane 3</div>
</Split>`;
export const collapseProgramaticallySnippet = `<Split mode='horizontal'>
  <div>Pane 1</div>
  <div>Pane 2</div>
  <div>Pane 3</div>
  <div>Pane 4</div>
</Split>
<div>
  <button onClick={() => SplitUtils.closeSplitter(2, "horizontal")}>Collpase</button>
  <button onClick={() => SplitUtils.openSplitter(2, "horizontal")}>Expand</button>
</div>
`;
