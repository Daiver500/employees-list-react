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
        {name: "Alex" , salary: 800, increase: false, like: true,  id: 1},    // моковые данные 
        {name: "Ivan" , salary: 300, increase: true, like: false, id: 2},
        {name: "Petr" , salary: 500, increase: false, like: false, id: 3}
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
        like: false,
        id: this.maxId++
     }
     this.setState(({data}) => {    
       const newArray = [...data, newEmployee]
       return {
         data: newArray
       }
     })
  }

  onToggleIncrease = (id) => {            // изменяет increase на противоположный у определнного элемента по id
    // СПОСОБ 1
    /*this.setState(({data})=>{
      const index = data.findIndex((item) => { return item.id === id});        // находим элементы по id
      const oldData = data[index];                                           // старая data
      const newItem = {...oldData, increase: !oldData.increase};              // новый increase не равно increase в старой data
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index +1)];     // новый массив с новым increase

      return  {
        data: newArray                // заменяем старый массив с данными на новый

      }      
    })*/

     // СПОСОБ 2
     this.setState(({data}) => {
       return {
         data: data.map((item) => {      // объект state мы менять не можем, поэтому нужен новый массив
           if(item.id === id) {         // если мы нашли объект который совпадает по id, то мы вернем новый объект с новым increase
             return {
               ...item, increase: !item.increase
             }
           }
           return item;
         })
       }
     })

  }

  onToggleLike = (id) => {                         // изменяет like на противоположный у определнного элемента по id
    this.setState(({data}) => {
      return {
        data: data.map((item) => {      
          if(item.id === id) {         
            return {
              ...item, like: !item.like
            }
          }
          return item;
        })
      }
    })
  }
 
  // если новый элемент появлется в начале или середине списка, реакт будет перерисовывать все после него
  // чтобы этого избежать и не менять все подряд используется key
  render() {
  const employees = this.state.data.length;                 // находим количество сотрудников
  const increased = this.state.data.filter((item) => {       // находим у кого есть increase
    return item.increase
  })

  const increasedLength = increased.length
 
  return (
    <div className="app">
      <AppHeader employees={employees} increased={increasedLength}></AppHeader>
      <div className="app-search">
        <SearchPanel></SearchPanel>
        <AppFilter></AppFilter>
      </div>
      <EmployeesList 
        data={this.state.data}  // передаем все вниз по цепочке
        deleteItem={this.deleteItem}
        onToggleIncrease={this.onToggleIncrease}
        onToggleLike={this.onToggleLike}
        >
      </EmployeesList> {/*передаем массив в компонент как props, теперь можно использовать его внутри компонента */}
      <EmployeesAddForm  addItem ={this.addItem}></EmployeesAddForm>
    </div>
)
  }
}

export default App
