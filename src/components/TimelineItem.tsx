import "./TimelineItem.css";

export interface TimelineItemProps {
  startYear: number;
  endYear?: number;
  title: string;
  content: string[];
}

function TimelineItem({
  title,
  startYear,
  endYear,
  content,
}: TimelineItemProps) {
  return (
    <div className="content-box">
      <div className="date">
        <i className="bx bx-calendar"></i>
        {startYear} - {endYear}
      </div>
      <h3>{title}</h3>

      <ul>
        {content.map((str, i) => {
          return <li key={i}>{str}</li>;
        })}
      </ul>
    </div>
  );
}

export default TimelineItem;
