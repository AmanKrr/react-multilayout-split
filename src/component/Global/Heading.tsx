function Heading({ content, style, className }: { content: string; style?: Record<string, string>; className?: string }) {
  return (
    <div style={style} className={className || "t-header"}>
      <h2>{content}</h2>
    </div>
  );
}

export default Heading;
