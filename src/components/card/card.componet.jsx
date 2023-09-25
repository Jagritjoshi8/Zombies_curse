import "./card.styles.css";
const Card = (props) => {
  const {
    id,
    name,
    address: { city },
  } = props.monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id + 4}?set=set2&size=250x250`}
      />
      <h2>{name}</h2>
      <p id="clan">clan: {city}</p>
    </div>
  );
};

export default Card;
