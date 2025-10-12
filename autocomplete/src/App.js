import "./App.css";
import Autocomplete from "./components/AutoComplete";
import data from "./data/data.json";

const App = () => {


  return (
    <div className="app">
      <h1>Autocomplete Typeahead Example</h1>
      <Autocomplete suggestions={data.fruits} />
      {/* <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
