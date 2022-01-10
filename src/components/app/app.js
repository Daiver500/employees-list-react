import "./app.css";
import AppHeader from "../app-header/app-header"
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

function App() {
  return (
      <div className="app">
        <AppHeader></AppHeader>
        <div className="app-search">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
        <EmployeesList></EmployeesList>
        <EmployeesAddForm></EmployeesAddForm>
      </div>
  )
}

export default App