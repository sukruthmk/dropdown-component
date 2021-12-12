import Dropdown from "./components/dropdown";

import "./App.scss";

function App() {
  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push({
      value: `option ${i + 1}`,
    });
  }

  const onDropdownChangeSingle = (option, eventType) => {};

  const onDropdownChangeMulti = (option, eventType) => {};

  return (
    <div className="app">
      <h1> Dropdown component demo </h1>
      <h3> Single select dropdown </h3>
      <div className="app__center">
        <Dropdown
          type="single"
          options={options}
          onDropdownChange={onDropdownChangeSingle}
        />
      </div>
      <h3> Multi select dropdown </h3>
      <div className="app__center">
        <Dropdown
          type="multi"
          options={options}
          onDropdownChange={onDropdownChangeMulti}
        />
      </div>
    </div>
  );
}

export default App;
