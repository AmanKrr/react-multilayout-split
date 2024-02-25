export const minMaxSnippets = `<Split mode='horizontal' minSizes={[20, 20]} maxSizes={[80, 80]}>
  <div>Pane 1</div>
  <div>Pane 2</div>
</Split>`;
export const disableResizingSnippets = `<Split mode='horizontal' disable>
  <div>Pane 1</div>
  <div>Pane 2</div>
</Split>`;
export const disableSpecificResizingSnippets = `<Split mode='horizontal' disable={[1, 2]}>
  <div>Pane 1</div>
  <div>Pane 2</div>
  <div>Pane 3</div>
  <div>Pane 4</div>
</Split>`;
