import {Component} from "react"
import "./app.css";
import AppHeader from "../app-header/app-header"
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

class App extends Component {          
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "Alex" , salary: 800, increase: false, id: 1},    // моковые данные 
        {name: "Ivan" , salary: 300, increase: true, id: 2},
        {name: "Petr" , salary: 500, increase: false, id: 3}
      ]
    }
  }

  deleteItem = (id) => {            // удаляем элемент из state
    this.setState(({data}) => {     
      const index = data.findIndex(elem => elem.id == id)
      data.splice(index, 1)
      return {
        data: data
      }
    })
  }
 
  // если новый элемент появлется в начале или середине списка, реакт будет перерисовывать все после него
  // чтобы этого избежать и не менять все подряд используется key
  render() {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="app-search">
        <SearchPanel></SearchPanel>
        <AppFilter></AppFilter>
      </div>
      <EmployeesList data={this.state.data}
       onDelete={this.deleteItem}
      ></EmployeesList> {/*передаем массив в компонент как props, теперь можно использовать его внутри компонента */}
      <EmployeesAddForm></EmployeesAddForm>
    </div>
)
  }
}

export default App