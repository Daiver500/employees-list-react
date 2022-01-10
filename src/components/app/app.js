import "./app.css";
import AppHeader from "../app-header/app-header"
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";

function App() {
  return (
      <div className="app">
        <AppHeader></AppHeader>
        <div className="app-search">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
      </div>
  )
}

export default App