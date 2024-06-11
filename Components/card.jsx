export const Card = (props) => (
    <div className="card">
    <img className="card-image" src={props.src} />
    <h3 className="card-title">{props.title}</h3>
    </div>
  );