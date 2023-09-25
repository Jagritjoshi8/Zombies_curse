import Card from "../card/card.componet";
import "./card-list.styles.css";
const Cardlist = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default Cardlist;
