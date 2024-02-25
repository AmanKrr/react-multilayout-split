function Sidebar({ content, setContent }: { content: number; setContent: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div className="sidebar">
      <button onClick={() => setContent(1)} className={content === 1 ? "active" : "unactive"}>
        Get Started
      </button>
      <button onClick={() => setContent(2)} className={content === 2 ? "active" : "unactive"}>
        Expand and Collapse
      </button>
      <button onClick={() => setContent(3)} className={content === 3 ? "active" : "unactive"}>
        Split Panes
      </button>
      <button onClick={() => setContent(4)} className={content === 4 ? "active" : "unactive"}>
        Resize
      </button>
      <button onClick={() => setContent(5)} className={content === 5 ? "active" : "unactive"}>
        Pane Sizing
      </button>
    </div>
  );
}

export default Sidebar;
