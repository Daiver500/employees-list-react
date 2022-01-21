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
    this.maxId = 4;
  }
  

  deleteItem = (id) => {            // удаляем элемент из state, по клику создаем новый массив без того элемента по которому кликнули 
    this.setState(({data}) => {     
      
      // СПОСОБ 1
      // const index = data.findIndex((elem) => {
      //   return elem.id == id                           // находим элемент с определенным id 
      // })  
      // const before = data.slice(0, index)  // создаем новый массив до index который нашли
      // const after = data.slice(index + 1) // создаем новый массив после index который нашли
      // const newArray = [...before, ...after]  // создаем новый массив
      // return  {
        // data: newArray   // заменяем исходный массив на новый массив
      // }
    // })

      // СПОСОБ 2
      return  {
        data: data.filter((item) => {
           return item.id !== id
        })   // заменяем исходный массив на новый массив c помощью filter
      }
    })
  }

  addItem = (name, salary) => {    // добавляем элемент в массив
     const newEmployee = {
        name,
        salary,
        increase: false,
        id: this.maxId++
     }
     this.setState(({data}) => {    
       const newArray = [...data, newEmployee]
       return {
         data: newArray
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
      <EmployeesList 
        data={this.state.data}  // передаем все вниз по цепочке
        onDelete={this.deleteItem}>
      </EmployeesList> {/*передаем массив в компонент как props, теперь можно использовать его внутри компонента */}
      <EmployeesAddForm  onAdd ={this.addItem}></EmployeesAddForm>
    </div>
)
  }
}

export default App
