import "./app.css";
import AppHeader from "../app-header/app-header"
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

function App() {          // моковые данные 
  
  const data = [
    {name: "Alex" , salary: 800, increase: false},
    {name: "Ivan" , salary: 300, increase: true},
    {name: "Petr" , salary: 500, increase: false},
  ]


  return (
      <div className="app">
        <AppHeader></AppHeader>
        <div className="app-search">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
        <EmployeesList data={data}></EmployeesList> {/*передаем массив в компонент как props, теперь можно использовать его внутри компонента */}
        <EmployeesAddForm></EmployeesAddForm>
      </div>
  )
}

export default App