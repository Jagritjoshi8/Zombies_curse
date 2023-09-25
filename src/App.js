import { useState, useEffect } from "react";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  //console.log("render");
  const [searchField, setSearchField] = useState(""); // [value,setvalue]
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // console.log(searchField);
  // console.log(filteredMonsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchchange = (Event) => {
    const searchFieldString = Event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Zombies Curse</h1>
        <SearchBox
          onSearchchange={onSearchchange}
          placeholder="search Zombies"
          className="monsters-search-box"
        />

        <Cardlist monsters={filteredMonsters} />
        <p></p>
      </header>
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   onSearchchange = (Event) => {
//     const searchField = Event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchchange } = this;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     // console.log(filteredMonsters);

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="app-title">Zombies Curse</h1>
//           <SearchBox
//             onSearchchange={onSearchchange}
//             placeholder="search Zombies"
//             className="monsters-search-box"
//           />

//           <Cardlist monsters={filteredMonsters} />
//           <p></p>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
