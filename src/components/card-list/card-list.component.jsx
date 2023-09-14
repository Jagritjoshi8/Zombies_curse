import { Component } from "react";
import Card from "../card/card.componet";
import "./card-list.styles.css";
class Cardlist extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
