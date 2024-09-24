import './App.css';
import InfoBox from "./components/InfoBox/InfoBox";
import Iterator from './components/Iterator/Iterator';
import List from './components/List/List';
import PeopleList from './components/PeopleList/PeopleList';


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <InfoBox />
      <List />
      <PeopleList/>
      <Iterator/>
    </div>
  );
}

export default App;
