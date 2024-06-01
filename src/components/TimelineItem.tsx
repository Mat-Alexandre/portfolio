import "./TimelineItem.css";

export interface TimelineItemProps {
  title: string;
  year: number;
  content: string[];
  url: string;
}

function TimelineItem({
  title,
  year,
  content,
  url,
}: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{year}</div>
      <div
        onClick={() => window.open(url, "_blank")}
        className="timeline-content">
        <h3>{title}</h3>
        <ul>
          {content.map((s) => {
            return <li>{s}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;
