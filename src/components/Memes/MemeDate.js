import './MemeDate.css';

function MemeDate(props) {
  const month = props.date.toLocaleString("PL", { month: "long" });
  const day = props.date.toLocaleString("PL", { day: "2-digit" });
  const year = props.date.getFullYear();

return (
  <div className="meme-date">
    <div className="meme-date__month">{month}</div>
    <div className="meme-date__year">{year}</div>
    <div className="meme-date__day">{day}</div>
  </div>
);
}
export default MemeDate;