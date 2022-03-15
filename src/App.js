import './App.css';
import {ClassSelector, LevelSelector, HPBox} from './components/class-selector';
// import LevelSelector from './components/class-selector';
// import HPBox from './components/class-selector';
import { useEffect, useState } from 'react';

//moved below const classData into db.json
// const classData = [
// {
//   classTitle: "Artificer",
//   hitDice: 8
// },
// {
//   classTitle: "Barbarian",
//   hitDice: 12
// },
// {
//   classTitle: "Bard",
//   hitDice: 8
// },
// {
//   classTitle: "Blood Hunter",
//   hitDice: 10
// },
// {
//   classTitle: "Cleric",
//   hitDice: 8
// },
// {
//   classTitle: "Druid",
//   hitDice: 8
// },
// {
//   classTitle: "Fighter",
//   hitDice: 10
// },
// {
//   classTitle: "Monk",
//   hitDice: 8
// },
// {
//   classTitle: "Paladin",
//   hitDice: 10
// },
// {
//   classTitle: "Ranger",
//   hitDice: 10
// },
// {
//   classTitle: "Rogue",
//   hitDice: 8
// },
// {
//   classTitle: "Sorcerer",
//   hitDice: 6
// },
// {
//   classTitle: "Warlock",
//   hitDice: 8
// },
// {
//   classTitle: "Wizard",
//   hitDice: 6
// }
// ]



function App() {

  const [data, setData] = useState([]);

    useEffect(()=>console.log("I just rendered!"))
    useEffect(()=>{


    //to start json server open another terminal and enter "npx json-server -p 3003 db.json"
    fetch("http://localhost:3003/classData")
      .then(response => response.json())
      // .then(data => console.dir(data))
      .then(data => setData(data))

    },[]);


  return (
    <div className="App">
      <header className="App-header">
        <ClassSelector classes={data}/>
        {/* below two not used, components combined into the classSelector component */}
        {/* <LevelSelector />
        <HPBox /> */}
      </header>
    </div>
  );
}

export default App;
